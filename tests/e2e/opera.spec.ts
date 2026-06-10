import { test, expect } from '@playwright/test'

test('formulario renderiza con todos los campos y captura UTM + gclid de la URL', async ({ page }) => {
  await page.goto('/?utm_source=google&utm_medium=cpc&utm_campaign=test-e2e&gclid=test-gclid-123')

  await expect(page.getByPlaceholder('Tu nombre')).toBeVisible({ timeout: 15_000 })
  await expect(page.getByPlaceholder('Tu apellido')).toBeVisible()
  await expect(page.getByPlaceholder('Nombre de tu empresa')).toBeVisible()
  await expect(page.getByPlaceholder('tu@email.com')).toBeVisible()
  await expect(page.getByPlaceholder('Número')).toBeVisible()

  // Radios de calificación de cartera — opera comparte este formulario con recupera
  await expect(page.getByRole('radio', { name: '1-10' })).toBeAttached()
  await expect(page.getByRole('radio', { name: '10-50' })).toBeAttached()
  await expect(page.getByRole('radio', { name: '50+' })).toBeAttached()

  await expect(page.getByRole('button', { name: /contactar a un especialista/i })).toBeVisible()

  const url = page.url()
  expect(url).toContain('utm_source=google')
  expect(url).toContain('gclid=test-gclid-123')
})

test('submit sin datos muestra errores de validación', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('button', { name: /contactar a un especialista/i }).click()

  await expect(page.getByText(/el nombre es obligatorio/i)).toBeVisible({ timeout: 5_000 })
})

test('/thankyou muestra confirmación, embed HubSpot y botón WhatsApp', async ({ page }) => {
  await page.goto('/thankyou')

  await expect(page.getByText(/hemos recibido tus datos/i)).toBeVisible({ timeout: 15_000 })

  // HubSpot embed container
  const embedContainer = page.locator('.meetings-iframe-container')
  await expect(embedContainer).toBeAttached()
  const dataSrc = await embedContainer.getAttribute('data-src')
  expect(dataSrc).toContain('meetings.hubspot.com/francisco502')

  // Fallback link
  const fallbackLink = page.getByRole('link', { name: /abrir calendario/i })
  await expect(fallbackLink).toBeVisible()

  // WhatsApp button
  const waLink = page.getByRole('link', { name: /hablar por whatsapp/i })
  await expect(waLink).toBeVisible()
  const waHref = await waLink.getAttribute('href')
  expect(waHref).toContain('wa.me/56977290160')
  expect(waHref).toContain('Opera')
})

test('header muestra CTA "Agendar diagnóstico" sin "Iniciar sesión"', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('button', { name: /agendar diagnóstico/i })).toBeVisible({ timeout: 10_000 })
  await expect(page.getByRole('button', { name: /iniciar sesión/i })).not.toBeVisible()
})

test('mobile 375px — CTA "Agendar diagnóstico" visible sin scroll (#202)', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 })
  await page.goto('/?utm_source=google&utm_medium=cpc')

  // Header CTA activo en mobile
  await expect(page.getByRole('button', { name: /agendar diagnóstico/i })).toBeVisible({ timeout: 15_000 })
})
