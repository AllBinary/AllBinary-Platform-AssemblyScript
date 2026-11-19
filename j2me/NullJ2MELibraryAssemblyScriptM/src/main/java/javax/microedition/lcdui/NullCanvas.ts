// Generated Code Do Not Modify
// package javax.microedition.lcdui
// import java.util.Stack

@global export class NullCanvas extends Canvas {

    jclassName(): string {
        return "javax.microedition.lcdui.NullCanvas";
    }
    @lazy static jv_NULL_CANVAS: NullCanvas | null = null;
    @lazy static js_NULL_CANVAS: bool = false;
    static get NULL_CANVAS(): NullCanvas | null {
        if (!NullCanvas.js_NULL_CANVAS) {
            NullCanvas.js_NULL_CANVAS = true;
            NullCanvas.jv_NULL_CANVAS = new NullCanvas().jinit_NullCanvas_0();
        }
        return NullCanvas.jv_NULL_CANVAS;
    }
    static set NULL_CANVAS(value: NullCanvas | null) {
        NullCanvas.js_NULL_CANVAS = true;
        NullCanvas.jv_NULL_CANVAS = value;
    }
    

    jinit_NullCanvas_0(): NullCanvas {
        super.jinit_Canvas_0();
        return this;
    }
    

    setFullScreenMode(mode: bool): void {
    }
    

    sizeChanged(w: i32, h: i32): void {
    }
    

    getCommandStack(): JStack | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
    

    isCommand(command: Command | null): bool {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return false; }
        return false;
    }
    

    addCommand(command: Command | null): void {
    }
    

    removeCommand(command: Command | null): void {
    }
    

    removeAllCommands(): void {
    }
    

    setCommandListener(l: CommandListener | null): void {
    }
    

    getCustomCommandListener(): CommandListener | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
    

    isPaused(): bool {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return false; }
        return false;
    }
    

    removePauseCommand(): void {
    }
    

    pause(): void {
    }
    

    unPause(): void {
    }
    

    process(): void {
    }
    

    paint(graphics: Graphics | null): void {
    }
    

    destroy(): void {
    }
    

    setPaused(isPaused: bool): void {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return; }
    }
    

    pointerDragged(x: i32, y: i32): void {
    }
    

    pointerPressed(x: i32, y: i32): void {
    }
    

    pointerReleased(x: i32, y: i32): void {
    }
}

