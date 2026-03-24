import Link from "next/link";

export const TermAndCond = () => {
  return (
    <div className="grow bg-[#F9F9F9]">
      <div className="max-w-[1280px] mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-8">
          <h1 className="text-brand-primary-dark text-3xl md:text-5xl font-extrabold mb-3">
            Términos y <span className="text-brand-primary">Condiciones</span>
          </h1>
          <p className="text-slate-600 text-sm">
            Fecha de actualización: lunes 01 de diciembre del 2025
          </p>
        </div>
        <section className="bg-white text-slate-700 font-normal text-sm md:text-base p-8 md:p-14 rounded-2xl shadow-sm space-y-10">

          {/* 1. INTRODUCCIÓN */}
          <div>
            <h2 className="text-brand-primary-dark text-lg md:text-xl font-extrabold mb-4">
              1. Introducción y aceptación expresa
            </h2>
            <p className="mb-3 leading-relaxed">
              Este acuerdo se celebra entre <strong>Flujolink SpA</strong> (&ldquo;Flujolink&rdquo;), y la persona natural o jurídica que contrata o accede al servicio (&ldquo;Cliente&rdquo;).
            </p>
            <p className="leading-relaxed">
              Al hacer clic en el botón <strong>&ldquo;Crear Cuenta&rdquo;</strong>, <strong>&ldquo;Registrarme&rdquo;</strong> o al realizar el primer uso de la Plataforma, el Cliente acepta estos Términos de manera <strong>expresa, inequívoca e irrevocable</strong>. Este acto constituye una firma electrónica válida y perfecciona el contrato, eliminando la necesidad de firmas en papel. Si usted no tiene las facultades para obligar a su empresa, no continúe con el registro.
            </p>
          </div>

          {/* 2. DESCRIPCIÓN DEL SERVICIO */}
          <div>
            <h2 className="text-brand-primary-dark text-lg md:text-xl font-extrabold mb-4">
              2. Descripción del servicio (SaaS)
            </h2>
            <p className="mb-3 leading-relaxed">
              La Plataforma Flujolink es un software como servicio (SaaS) diseñado para la gestión financiera, conciliación bancaria y automatización de cobranza.
            </p>
            <p className="leading-relaxed">
              <strong>Flujolink es un proveedor de tecnología, no una institución financiera, banco ni asesor tributario.</strong> La Plataforma facilita la visualización y gestión de datos, pero la toma de decisiones financieras es responsabilidad exclusiva del Cliente.
            </p>
          </div>

          {/* 3. MANDATO ESPECIAL */}
          <div>
            <h2 className="text-brand-primary-dark text-lg md:text-xl font-extrabold mb-4">
              3. Mandato especial de acceso a información
            </h2>
            <p className="mb-3 leading-relaxed">
              Para la correcta prestación de los servicios (especialmente la conciliación y lectura de DTEs), el Cliente otorga a Flujolink un <strong>mandato especial, gratuito e irrevocable</strong> durante la vigencia del servicio, para actuar en su nombre frente a terceros (incluyendo, pero no limitado a, el Servicio de Impuestos Internos y portales bancarios) exclusivamente con fines de <strong>lectura, sincronización y centralización de información</strong>.
            </p>
            <p className="leading-relaxed">
              El Cliente declara que las credenciales entregadas para este fin son fidedignas y autoriza a los sistemas automatizados (&ldquo;bots&rdquo;) de Flujolink a acceder a dichas fuentes. Flujolink se compromete a no realizar transacciones, transferencias ni modificaciones en los portales bancarios o tributarios del Cliente, salvo que una funcionalidad específica así lo requiera y sea autorizada expresamente.
            </p>
          </div>

          {/* 4. TARIFAS */}
          <div>
            <h2 className="text-brand-primary-dark text-lg md:text-xl font-extrabold mb-4">
              4. Tarifas, facturación y reajuste
            </h2>
            <p className="mb-3 leading-relaxed">
              El pago de las tarifas se rige por lo indicado en la sección &ldquo;Facturación&rdquo; de la Cuenta o en la propuesta comercial aceptada.
            </p>
            <p className="mb-3 leading-relaxed">
              Flujolink se reserva el derecho de reajustar sus tarifas anualmente de acuerdo a la variación del IPC acumulado o condiciones de mercado, previa notificación al Cliente con 30 días de anticipación.
            </p>
            <p className="leading-relaxed">
              En caso de mora o rechazo del medio de pago, Flujolink podrá suspender el acceso a la Plataforma automáticamente tras 5 días de aviso, sin responsabilidad por la pérdida de datos o interrupción de la gestión de cobranza durante el periodo de suspensión.
            </p>
          </div>

          {/* 5. DISPONIBILIDAD Y SLA */}
          <div>
            <h2 className="text-brand-primary-dark text-lg md:text-xl font-extrabold mb-4">
              5. Disponibilidad y nivel de servicio (SLA)
            </h2>
            <p className="mb-3 leading-relaxed">
              Flujolink hará los esfuerzos comercialmente razonables para mantener la Plataforma disponible 24/7. Sin embargo, el servicio se entrega <strong>&ldquo;TAL CUAL&rdquo; (AS-IS)</strong> y <strong>&ldquo;SEGÚN DISPONIBILIDAD&rdquo;</strong>.
            </p>
            <p className="leading-relaxed">
              Flujolink no garantiza que el servicio será ininterrumpido o libre de errores. Las interrupciones por mantenimiento programado, fallas en proveedores externos (ej: caída de AWS, Azure, o intermitencias en la página del SII o Bancos) no serán consideradas incumplimiento de contrato por parte de Flujolink.
            </p>
          </div>

          {/* 6. LIMITACIÓN DE RESPONSABILIDAD */}
          <div>
            <h2 className="text-brand-primary-dark text-lg md:text-xl font-extrabold mb-4">
              6. Limitación de responsabilidad
            </h2>
            <p className="mb-4 leading-relaxed">
              En la máxima medida permitida por la ley chilena:
            </p>
            <div className="space-y-4 pl-4 border-l-2 border-brand-primary/20">
              <div>
                <p className="leading-relaxed">
                  <strong>A. Exclusión de Daños Indirectos:</strong> Flujolink no será responsable por lucro cesante, pérdida de oportunidades de negocio, pérdida de datos, daño a la imagen o cualquier daño indirecto o consecuencial derivado del uso o imposibilidad de uso de la Plataforma.
                </p>
              </div>
              <div>
                <p className="leading-relaxed">
                  <strong>B. Tope de Responsabilidad:</strong> La responsabilidad total acumulada de Flujolink por cualquier reclamo relacionado con este contrato <strong>no excederá en ningún caso el monto total pagado por el Cliente a Flujolink durante los tres (3) meses anteriores</strong> al evento que dio origen al reclamo.
                </p>
              </div>
            </div>
          </div>

          {/* 7. PROPIEDAD INTELECTUAL */}
          <div>
            <h2 className="text-brand-primary-dark text-lg md:text-xl font-extrabold mb-4">
              7. Propiedad intelectual y datos
            </h2>
            <p className="mb-3 leading-relaxed">
              El Cliente mantiene la propiedad de sus datos transaccionales. Flujolink mantiene la propiedad intelectual exclusiva del software, algoritmos y metodologías.
            </p>
            <p className="leading-relaxed">
              El Cliente autoriza a Flujolink a utilizar los datos generados por el uso de la Plataforma de manera <strong>anonimizada y agregada</strong> (sin identificar al Cliente) para fines estadísticos, mejora de algoritmos de Machine Learning, creación de benchmarks de industria y desarrollo de nuevos productos.
            </p>
          </div>

          {/* 8. PRIVACIDAD */}
          <div>
            <h2 className="text-brand-primary-dark text-lg md:text-xl font-extrabold mb-4">
              8. Privacidad y seguridad
            </h2>
            <p className="leading-relaxed">
              Flujolink cumple con la Ley N.º 19.628 y aplica estándares de industria para proteger la información. No obstante, el Cliente es responsable de mantener la confidencialidad de sus claves de acceso y de los usuarios a quienes otorga permisos dentro de la Plataforma.
            </p>
          </div>

          {/* 9. VIGENCIA */}
          <div>
            <h2 className="text-brand-primary-dark text-lg md:text-xl font-extrabold mb-4">
              9. Vigencia y término
            </h2>
            <p className="mb-3 leading-relaxed">
              El Cliente puede terminar su suscripción en cualquier momento notificando a través de la Plataforma o a hola@somossena.com.
            </p>
            <p className="leading-relaxed">
              Si el contrato es anual, se renovará automáticamente por periodos iguales salvo aviso con 30 días de antelación. No se realizarán reembolsos por periodos no utilizados en planes prepagados.
            </p>
          </div>

          {/* 10. LEY APLICABLE */}
          <div>
            <h2 className="text-brand-primary-dark text-lg md:text-xl font-extrabold mb-4">
              10. Ley aplicable y arbitraje
            </h2>
            <p className="leading-relaxed">
              Para cualquier controversia, las partes fijan domicilio en la comuna de Santiago y se someten a la jurisdicción de sus Tribunales Ordinarios de Justicia.
            </p>
          </div>

        </section>
        <div className="flex justify-center gap-6 py-12">
          <Link
            href="/"
            className="text-brand-primary hover:text-brand-primary-dark font-semibold text-sm transition-colors cursor-pointer"
          >
            Inicio
          </Link>
          <span className="text-slate-300">|</span>
          <Link
            href="/privacy"
            className="text-brand-primary hover:text-brand-primary-dark font-semibold text-sm transition-colors cursor-pointer"
          >
            Política de Privacidad
          </Link>
        </div>
      </div>
    </div>
  );
};
