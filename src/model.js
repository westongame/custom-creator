export default class Model {
    constructor(initialAppData) {
        this.isPreviewMode = false;
        this.isFullScreen = false;
        this.previewDevice = 'desktop';
        this.showErrorPopup = false;
        this.editMode = '';
        this.editingIndex = null;
        this.customTitle = {
            text: '',
            error: false,
        };
        this.menuPresets = [];
        this.content = [];
        this.presetTemplates = initialAppData.presetTemplates;
    }
}
