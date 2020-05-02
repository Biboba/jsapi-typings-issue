// Widgets
import Editor from 'esri/widgets/Editor';

import esri = __esri;

export function initWidgets(view: esri.MapView | esri.SceneView) {
  const editor = new Editor({ view });

  editor.set('allowedWorkflows', ['update']);

  view.ui.add(editor, 'top-right');
  return view;
}
