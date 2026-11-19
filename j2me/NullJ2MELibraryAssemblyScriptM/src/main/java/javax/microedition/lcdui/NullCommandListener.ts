// Generated Code Do Not Modify
// package javax.microedition.lcdui

@global export class NullCommandListener extends JObject implements CommandListener {

    jclassName(): string {
        return "javax.microedition.lcdui.NullCommandListener";
    }
    @lazy static jv_NULL_COMMAND_LISTENER: NullCommandListener | null = null;
    @lazy static js_NULL_COMMAND_LISTENER: bool = false;
    static get NULL_COMMAND_LISTENER(): NullCommandListener | null {
        if (!NullCommandListener.js_NULL_COMMAND_LISTENER) {
            NullCommandListener.js_NULL_COMMAND_LISTENER = true;
            NullCommandListener.jv_NULL_COMMAND_LISTENER = new NullCommandListener().jinit_NullCommandListener_0();
        }
        return NullCommandListener.jv_NULL_COMMAND_LISTENER;
    }
    static set NULL_COMMAND_LISTENER(value: NullCommandListener | null) {
        NullCommandListener.js_NULL_COMMAND_LISTENER = true;
        NullCommandListener.jv_NULL_COMMAND_LISTENER = value;
    }

    jinit_NullCommandListener_0(): NullCommandListener {
        super.jinit_JObject_0();
        return this;
    }
    

    commandAction(c: Command | null, d: Displayable | null): void {
    }
}

