// Map data
import { map } from './data/app';

// MapView
import MapView from 'esri/views/MapView';

// widget utils
import { initWidgets } from './widgets';

/**
 * Initialize application
 */
const view = new MapView({
  container: 'viewDiv',
  map,
});

view.when(initWidgets);
