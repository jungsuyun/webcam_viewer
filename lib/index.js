import { ICommandPalette, MainAreaWidget } from '@jupyterlab/apputils';
import { Widget } from '@lumino/widgets';
// import cv, {Mat, Rect} from "opencv-ts";
const extension = {
    id: 'webcam_viewer',
    autoStart: true,
    requires: [ICommandPalette],
    activate: (app, palette) => {
        console.log('Webcam Viewer Extension is activated');
        console.log('Icommand Palette : ', palette);
        const content = new Widget();
        content.addClass('my-webcamWidget');
        const widget = new MainAreaWidget({ content });
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
export default extension;
