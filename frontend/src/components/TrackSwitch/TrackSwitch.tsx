import type { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import type { TrackId } from '../../data/profile'
import { trackOrder } from '../../data/profile'
import './TrackSwitch.css'

type TrackSwitchProps = {
  value: TrackId
  onChange: (id: TrackId) => void
}

function TrackSwitch({ value, onChange }: TrackSwitchProps) {
  const { t } = useTranslation()

  const style = {
    '--count': trackOrder.length,
    '--index': trackOrder.indexOf(value),
  } as CSSProperties

  return (
    <div className="switch" role="tablist" aria-label={t('hero.trackAria')} style={style}>
      <span className="switch__thumb" aria-hidden="true" />
      {trackOrder.map((id) => (
        <button
          key={id}
          type="button"
          role="tab"
          aria-selected={value === id}
          className={`switch__btn${value === id ? ' switch__btn--active' : ''}`}
          onClick={() => onChange(id)}
        >
          {t(`tracks.${id}.label`)}
        </button>
      ))}
    </div>
  )
}

export default TrackSwitch
