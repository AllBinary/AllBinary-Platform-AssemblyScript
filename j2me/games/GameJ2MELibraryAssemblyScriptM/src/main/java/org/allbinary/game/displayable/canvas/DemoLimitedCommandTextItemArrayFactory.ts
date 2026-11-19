/*
 *
 * AllBinary Open License Version 1
 * Copyright (c) 2011 AllBinary
 * 
 * By agreeing to this license you and any business entity you represent are
 * legally bound to the AllBinary Open License Version 1 legal agreement.
 * 
 * You may obtain the AllBinary Open License Version 1 legal agreement from
 * AllBinary or the root directory of AllBinary's AllBinary Platform repository.
 * 
 * Created By: Travis Berthelot
 *  
 */
// Generated Code Do Not Modify
// package org.allbinary.game.displayable.canvas
// import org.allbinary.graphics.form.item.CommandTextItemArrayFactory
// import org.allbinary.graphics.form.item.LimitCommandsVisitor

@global export class DemoLimitedCommandTextItemArrayFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.DemoLimitedCommandTextItemArrayFactory";
    }
    @lazy static jv_instance: DemoLimitedCommandTextItemArrayFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): DemoLimitedCommandTextItemArrayFactory | null {
        if (!DemoLimitedCommandTextItemArrayFactory.js_instance) {
            DemoLimitedCommandTextItemArrayFactory.js_instance = true;
            DemoLimitedCommandTextItemArrayFactory.jv_instance = new DemoLimitedCommandTextItemArrayFactory().jinit_DemoLimitedCommandTextItemArrayFactory_0();
        }
        return DemoLimitedCommandTextItemArrayFactory.jv_instance;
    }
    static set instance(value: DemoLimitedCommandTextItemArrayFactory | null) {
        DemoLimitedCommandTextItemArrayFactory.js_instance = true;
        DemoLimitedCommandTextItemArrayFactory.jv_instance = value;
    }
    commandTextItemArrayFactory: CommandTextItemArrayFactory | null = null;

    jfields_DemoLimitedCommandTextItemArrayFactory(): void {
    this.commandTextItemArrayFactory = new CommandTextItemArrayFactory().jinit_CommandTextItemArrayFactory_1(new LimitCommandsVisitor().jinit_LimitCommandsVisitor_0());
    }

    jinit_DemoLimitedCommandTextItemArrayFactory_0(): DemoLimitedCommandTextItemArrayFactory {
        super.jinit_JObject_0();
        this.jfields_DemoLimitedCommandTextItemArrayFactory();
        return this;
    }
    

    static getInstance(): DemoLimitedCommandTextItemArrayFactory | null {
        return DemoLimitedCommandTextItemArrayFactory.instance;
    }
    

    getCommandTextItemArrayFactory(): CommandTextItemArrayFactory | null {
        return this.commandTextItemArrayFactory;
    }
}

