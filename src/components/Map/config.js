export default {
  general: {
    style: 'mapbox://styles/yago/cj3ub3iif00012stfgsqt3ej0',
    center: [6.82713, 46.57167],
    zoom: 9,
  },
  navigation: {
    enabled: true,
    position: 'top-right',
    options: {},
  },
  layers: {
    points: {
      id: 'points',
      type: 'symbol',
      source: 'points',
      layout: {
        'icon-image': 'marker-img',
        'icon-size': 0.4,
        'icon-anchor': 'bottom',
      },
    },
    clusters: {
      id: 'clusters',
      filter: ['has', 'point_count'],
      type: 'symbol',
      source: 'points',
      layout: {
        'icon-image': 'cluster-img',
        'icon-size': 0.4,
        'text-field': '{point_count_abbreviated}',
        'text-font': ['Open Sans Bold', 'Arial Unicode MS Regular'],
        'text-size': 12,
      },
      paint: {
        'text-color': '#fff',
      },
    },
  },
  images: [
    {
      name: 'marker-img',
      path: '/marker.png',
    },
    {
      name: 'cluster-img',
      path: '/cluster.png',
    },
  ],
};
