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

test('/thankyou muestra confirmación y link de agendamiento con francisco502', async ({ page }) => {
  await page.goto('/thankyou')

  await expect(page.getByText(/hemos recibido tus datos/i)).toBeVisible({ timeout: 15_000 })

  const meetingLink = page.getByRole('link', { name: /agendar/i })
  await expect(meetingLink).toBeVisible()
  const href = await meetingLink.getAttribute('href')
  expect(href).toContain('meetings.hubspot.com/francisco502')
})

test('header muestra CTA "Agendar diagnóstico" sin "Iniciar sesión"', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('button', { name: /agendar diagnóstico/i })).toBeVisible({ timeout: 10_000 })
  await expect(page.getByRole('button', { name: /iniciar sesión/i })).not.toBeVisible()
})
