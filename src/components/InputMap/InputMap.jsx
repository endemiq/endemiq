/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { Map } from 'components';

const InputMap = ({
  slug,
  hasError,
  error,
  help,
  value,
  onChange,
  required,
}) => {
  const { t } = useTranslation();

  return (
    <div css={tw('mb-4')}>
      <label htmlFor="map-input" css={tw('block mb-1')}>
        {t(`form.${slug}`)}
        {required && <sup css={tw('text-xs')}>*</sup>}
      </label>
      <div
        css={[
          tw('relative mb-1 w-full rounded overflow-hidden'),
          { height: '300px' },
          hasError && tw('border border-solid border-red-500'),
        ]}
      >
        <Map
          id="map-input"
          data={{
            type: 'FeatureCollection',
            features:
              value.longitude && value.latitude
                ? [
                    {
                      type: 'Feature',
                      geometry: {
                        type: 'Point',
                        coordinates: [value.longitude, value.latitude],
                      },
                    },
                  ]
                : [],
          }}
          options={{ general: { scrollZoom: false } }}
          points
          clusters={false}
          onClick={e => {
            const { lng: longitude, lat: latitude } = e.lngLat;
            onChange({ longitude, latitude });
          }}
        />
      </div>
      {hasError && (
        <span css={tw('inline-block text-sm italic text-red-500')}>
          {error}
        </span>
      )}
      {!hasError && help && (
        <span css={tw('inline-block text-sm italic')}>{help}</span>
      )}
    </div>
  );
};

InputMap.propTypes = {
  error: PropTypes.any,
  help: PropTypes.string,
  hasError: PropTypes.bool,
  onChange: PropTypes.func,
  slug: PropTypes.string,
  value: PropTypes.any,
  required: PropTypes.bool,
};

InputMap.defaultProps = {};

export default InputMap;
