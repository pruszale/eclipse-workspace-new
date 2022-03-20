sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'sap/m/MessageBox', 'sap/m/MessageToast'],
  (Controller, MessageBox, MessageToast) => {
    'use strict';
    return Controller.extend('project.ap.controller.App', {
      onInit() {
        MessageBox.alert('Hello World', {
          onClose: () => {
            let messenger = 'Nice to meet you!';
            MessageToast.show(messenger);
          },
        });
      },
    });
  }
);
