"use client";

import { usePostContactForm } from "@/lib/services/contactService";
import { useCountries } from "@/lib/services/countryService";
import { useCurrencyStore } from "@/lib/store/useCurrencyStore";
import { useToastStore } from "@/lib/store/useToastStore";
import Button from "@/ui/shared/Button";
import { Input } from "@/ui/shared/Input";
import SimpleCountrySelect, {
  OptionSelect,
} from "@/ui/shared/SimpleCountrySelect";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Shield, Clock, Lock, Check } from "lucide-react";

type FormData = {
  nombre: string;
  correo: string;
  telefono: string;
  nombreEmpresa: string;
};

export const FinalCTA = () => {
  const { data: countries = [] } = useCountries();
  const { postContactFormMutate, isLoadingPostContactForm } =
    usePostContactForm();
  const searchParams = useSearchParams();
  const [countrySelect, setCountrySelect] = useState<string | null>(null);
  const { ipCurrency, setIpCurrency, setWhatsappCountry } = useCurrencyStore();
  const { showToast } = useToastStore();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      nombre: "",
      correo: "",
      telefono: "",
      nombreEmpresa: "",
    },
  });

  const countryOptions = useMemo(() => {
    if (!countries.length) return [];

    const priorityCountries = ["+51", "+56", "+57", "+593", "+52"];
    const priorityItems: OptionSelect[] = [];
    const otherItems: OptionSelect[] = [];

    countries.forEach((item) => {
      const option: OptionSelect = {
        id: item.country,
        label: item.country,
        icon: item.icon,
        subValue: item.country,
      };

      if (priorityCountries.includes(item.country)) {
        priorityItems.push(option);
      } else {
        otherItems.push(option);
      }
    });

    priorityItems.sort((a, b) => {
      return priorityCountries.indexOf(a.id) - priorityCountries.indexOf(b.id);
    });

    return [...priorityItems, ...otherItems];
  }, [countries]);

  useEffect(() => {
    if (ipCurrency === "PEN") {
      setCountrySelect("+51");
    } else if (ipCurrency === "CLP") {
      setCountrySelect("+56");
    } else if (ipCurrency === "COP") {
      setCountrySelect("+57");
    } else if (ipCurrency === "MXN") {
      setCountrySelect("+52");
    } else if (ipCurrency === "USD") {
      setCountrySelect("+593");
    }
  }, [ipCurrency]);

  const utmSource = searchParams?.get("utm_source") || null;
  const utmMedium = searchParams?.get("utm_medium") || null;
  const utmCampaign = searchParams?.get("utm_campaign") || null;
  const utmContent = searchParams?.get("utm_content") || null;

  const onChangeCountry = (value: string) => {
    setCountrySelect(value);
    if (value === "+51") {
      setIpCurrency("PEN");
      setWhatsappCountry({
        phoneNumber: "958969041",
        countryCode: "+51",
      });
    } else if (value === "+56") {
      setIpCurrency("CLP");
      setWhatsappCountry({
        phoneNumber: "944489673",
        countryCode: "+56",
      });
    } else if (value === "+57") {
      setIpCurrency("COP");
      setWhatsappCountry({
        phoneNumber: "944489673",
        countryCode: "+56",
      });
    } else if (value === "+52") {
      setIpCurrency("MXN");
      setWhatsappCountry({
        phoneNumber: "944489673",
        countryCode: "+56",
      });
    } else if (value === "+593") {
      setIpCurrency("USD");
      setWhatsappCountry({
        phoneNumber: "944489673",
        countryCode: "+56",
      });
    }
  };

  const onSubmit = (data: FormData) => {
    const telefonoConPrefijo = (countrySelect || "") + data.telefono;

    const form = new FormData();

    form.append("telefono", telefonoConPrefijo);
    form.append("formOrigin", "Landing Optimizada");
    form.append(
      "countryName",
      countries?.find((type) => type.country === countrySelect)?.country_code ||
        ""
    );
    form.append("productType", "main");
    form.append("nombre", data.nombre);
    form.append("apellido", "");
    form.append("correo", data.correo);
    form.append("representaEmpresa", "si");
    form.append("nombreEmpresa", data.nombreEmpresa);
    form.append("mensaje", "");
    form.append("howFound", "landing");

    if (utmSource) form.append("utmSource", utmSource);
    if (utmMedium) form.append("utmMedium", utmMedium);
    if (utmCampaign) form.append("utmCampaign", utmCampaign);
    if (utmContent) form.append("utmContent", utmContent);

    postContactFormMutate(form, {
      onSuccess: () => {
        showToast({
          iconType: "success",
          message: "Formulario enviado correctamente",
          subMessage:
            "Gracias por tu mensaje, pronto nos pondremos en contacto contigo.",
        });
        router.push("/thankyou");
        reset();
      },
      onError: () => {
        showToast({
          iconType: "error",
          message: "Error al enviar el formulario",
          subMessage: "Por favor, intenta de nuevo.",
        });
      },
    });
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-brand-primary-dark">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <h2 className="font-canaro font-extrabold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              Tu operación financiera puede ser otra
            </h2>
            <p className="font-adobe text-slate-300 text-lg md:text-xl mb-8">
              Agenda tu diagnóstico gratuito. Sin compromiso.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-brand-secondary" />
                <span className="text-white">Respuesta en 24h</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-brand-secondary" />
                <span className="text-white">Sin compromiso</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-brand-secondary" />
                <span className="text-white">Datos protegidos</span>
              </div>
            </div>

            <div className="inline-block bg-brand-secondary/20 rounded-full px-4 py-2">
              <span className="text-brand-secondary font-semibold text-sm">
                Cupos limitados para diagnósticos este mes
              </span>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-2xl p-6 md:p-8"
            >
              <div className="space-y-4">
                <Controller
                  name="nombre"
                  control={control}
                  rules={{ required: "El nombre es obligatorio" }}
                  render={({ field }) => (
                    <Input
                      label="Nombre completo"
                      placeholder="Tu nombre"
                      {...field}
                      error={errors.nombre?.message}
                    />
                  )}
                />

                <Controller
                  name="correo"
                  control={control}
                  rules={{
                    required: "El correo es obligatorio",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Correo inválido",
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      label="Email corporativo"
                      type="email"
                      placeholder="tu@empresa.com"
                      {...field}
                      error={errors.correo?.message}
                    />
                  )}
                />

                <Controller
                  name="telefono"
                  control={control}
                  rules={{
                    required: "El teléfono es obligatorio",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Solo se permiten números",
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      label="Teléfono"
                      type="tel"
                      placeholder="Número"
                      {...field}
                      error={errors.telefono?.message}
                      leftElement={
                        <SimpleCountrySelect
                          value={countrySelect}
                          onChange={(value: string) => onChangeCountry(value)}
                          options={countryOptions}
                        />
                      }
                    />
                  )}
                />

                <Controller
                  name="nombreEmpresa"
                  control={control}
                  rules={{ required: "El nombre de la empresa es obligatorio" }}
                  render={({ field }) => (
                    <Input
                      label="Nombre de tu empresa"
                      placeholder="Empresa..."
                      {...field}
                      error={errors.nombreEmpresa?.message}
                    />
                  )}
                />
              </div>

              <p className="text-xs text-slate-500 mt-4 mb-4">
                Al enviar, aceptas los{" "}
                <Link
                  href="/term"
                  className="text-brand-primary font-semibold hover:underline"
                >
                  Términos
                </Link>{" "}
                y la{" "}
                <Link
                  href="/privacy"
                  className="text-brand-primary font-semibold hover:underline"
                >
                  Política de Privacidad
                </Link>
              </p>

              <Button
                type="submit"
                text={
                  isLoadingPostContactForm ? "Enviando..." : "Agendar diagnóstico"
                }
                variant="secondaryFilled"
                size="lg"
                className="w-full"
                disabled={isLoadingPostContactForm}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
