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
// package org.allbinary.graphics.form.item
// import javax.microedition.lcdui.Command
// import org.allbinary.graphics.color.BasicColor

@global export class CommandTextItem extends ABTextItem {

    jclassName(): string {
        return "org.allbinary.graphics.form.item.CommandTextItem";
    }
    command: Command | null = null;

    jfields_CommandTextItem(): void {
    
    }
    

    jinit_CommandTextItem_5(command: Command | null, layout: i32, altText: string | null, backgroundBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null): CommandTextItem {
        super.jinit_ABTextItem_5(command!.getLabel(), layout, altText, backgroundBasicColor, foregroundBasicColor);
        this.jfields_CommandTextItem();
        this.command = command;
        return this;
    }
    

    isFocusable(): bool {
        return true;
    }
    

    getCommand(): Command | null {
        return this.command;
    }
}

