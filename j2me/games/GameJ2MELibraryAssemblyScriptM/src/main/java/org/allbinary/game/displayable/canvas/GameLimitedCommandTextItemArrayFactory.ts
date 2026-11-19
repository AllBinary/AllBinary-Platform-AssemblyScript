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

@global export class GameLimitedCommandTextItemArrayFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.GameLimitedCommandTextItemArrayFactory";
    }
    @lazy static jv_instance: GameLimitedCommandTextItemArrayFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): GameLimitedCommandTextItemArrayFactory | null {
        if (!GameLimitedCommandTextItemArrayFactory.js_instance) {
            GameLimitedCommandTextItemArrayFactory.js_instance = true;
            GameLimitedCommandTextItemArrayFactory.jv_instance = new GameLimitedCommandTextItemArrayFactory().jinit_GameLimitedCommandTextItemArrayFactory_0();
        }
        return GameLimitedCommandTextItemArrayFactory.jv_instance;
    }
    static set instance(value: GameLimitedCommandTextItemArrayFactory | null) {
        GameLimitedCommandTextItemArrayFactory.js_instance = true;
        GameLimitedCommandTextItemArrayFactory.jv_instance = value;
    }
    commandTextItemArrayFactory: CommandTextItemArrayFactory | null = null;

    jfields_GameLimitedCommandTextItemArrayFactory(): void {
    this.commandTextItemArrayFactory = new CommandTextItemArrayFactory().jinit_CommandTextItemArrayFactory_1(new LimitCommandsVisitor().jinit_LimitCommandsVisitor_0());
    }

    jinit_GameLimitedCommandTextItemArrayFactory_0(): GameLimitedCommandTextItemArrayFactory {
        super.jinit_JObject_0();
        this.jfields_GameLimitedCommandTextItemArrayFactory();
        return this;
    }
    

    static getInstance(): GameLimitedCommandTextItemArrayFactory | null {
        return GameLimitedCommandTextItemArrayFactory.instance;
    }
    

    getCommandTextItemArrayFactory(): CommandTextItemArrayFactory | null {
        return this.commandTextItemArrayFactory;
    }
}

