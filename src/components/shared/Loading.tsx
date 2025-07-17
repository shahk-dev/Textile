import { useTranslations } from "next-intl"

export default function Loading() {
    const t = useTranslations("Map")
  return (
    <div className="container text-center text-xl !my-4">{t('loading')}</div>
  )
}
