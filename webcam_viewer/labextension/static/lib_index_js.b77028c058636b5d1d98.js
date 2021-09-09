"use strict";
(self["webpackChunkwebcam_viewer"] = self["webpackChunkwebcam_viewer"] || []).push([["lib_index_js"],{

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lumino/widgets */ "webpack/sharing/consume/default/@lumino/widgets");
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lumino_widgets__WEBPACK_IMPORTED_MODULE_1__);


// import cv, {Mat, Rect} from "opencv-ts";
const extension = {
    id: 'webcam_viewer',
    autoStart: true,
    requires: [_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.ICommandPalette],
    activate: (app, palette) => {
        console.log('Webcam Viewer Extension is activated');
        console.log('Icommand Palette : ', palette);
        const content = new _lumino_widgets__WEBPACK_IMPORTED_MODULE_1__.Widget();
        content.addClass('my-webcamWidget');
        const widget = new _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.MainAreaWidget({ content });
        widget.id = 'webcam-viewer';
        widget.title.label = 'Webcam Viewer';
        widget.title.closable = true;
        let img = document.createElement('img');
        content.node.appendChild(img);
        let summary = document.createElement('p');
        content.node.appendChild(summary);
        img.src = 'http://118.34.115.67:7070/video_stream';
        summary.innerText = 'Your Device';
        const command = 'webcam:open';
        app.commands.addCommand(command, {
            label: 'Viewing Webcam Image',
            execute: () => {
                if (!widget.isAttached) {
                    app.shell.add(widget, 'main');
                }
                app.shell.activateById(widget.id);
            }
        });
        palette.addItem({ command, category: 'Tutorial' });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extension);


/***/ })

}]);
//# sourceMappingURL=lib_index_js.b77028c058636b5d1d98.js.map