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
// import javax.microedition.lcdui.LcduiImageItem
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.graphics.form.ScreenInfo
// import org.allbinary.logic.VectorUtil
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.util.visitor.Visitor
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class CommandTextItemArrayFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.form.item.CommandTextItemArrayFactory";
    }
    list: BasicArrayList | null = null;
    visitorInterface: Visitor | null = null;

    jfields_CommandTextItemArrayFactory(): void {
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    
    }
    

    jinit_CommandTextItemArrayFactory_1(visitorInterface: Visitor | null): CommandTextItemArrayFactory {
        super.jinit_JObject_0();
        this.jfields_CommandTextItemArrayFactory();
        this.visitorInterface = visitorInterface;
        return this;
    }
    

    getInstance3(vector: Object | null, backgroundBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null): StaticArray<ABCustomItem | null> | null {
        let vectorUtil: VectorUtil | null = VectorUtil.getInstance(); if (JThrowable.pending !== null) return null;
        let size: i32 = vectorUtil!.getSize(vector); if (JThrowable.pending !== null) return null;
        this.list!.clear(); if (JThrowable.pending !== null) return null;
        let textItem: CommandTextItem | null = null;
        let priorityLimit: i32 = 7;
        let displayInfo: DisplayInfoSingleton | null = DisplayInfoSingleton.getInstance(); if (JThrowable.pending !== null) return null;
        let isLargeEnoughDisplayForBigMenu: bool = (displayInfo!.isPortrait() && displayInfo!.getLastHeight() >= ScreenInfo.getInstance()!.MEDIUM_WIDTH) || (!displayInfo!.isPortrait() && displayInfo!.getLastWidth() >= ScreenInfo.getInstance()!.MEDIUM_WIDTH); if (JThrowable.pending !== null) return null;
        if (!isLargeEnoughDisplayForBigMenu && size > 3) {
            priorityLimit = 3;
        }
        let command: Command | null = null;
        for (let index: i32 = 0; index < size; index++) {
            command = changetype<Command | null>(vectorUtil!.elementAt(vector, index)); if (JThrowable.pending !== null) return null;
            if (command!.getPriority() < priorityLimit) {
                let aBoolean: JBoolean | null = changetype<JBoolean | null>(this.visitorInterface!.visit(command)); if (JThrowable.pending !== null) return null;
                if (aBoolean!.booleanValue()) {
                    textItem = new CommandTextItem().jinit_CommandTextItem_5(command, LcduiImageItem.LAYOUT_DEFAULT, StringUtil.getInstance()!.EMPTY_STRING, backgroundBasicColor, foregroundBasicColor); if (JThrowable.pending !== null) return null;
                    this.list!.add(textItem); if (JThrowable.pending !== null) return null;
                } if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        let textItemArray: StaticArray<ABCustomItem | null> | null = new StaticArray<ABCustomItem | null>(this.list!.size()); if (JThrowable.pending !== null) return null;
        let size2: i32 = textItemArray!.length;
        for (let index: i32 = 0; index < size2; index++) {
            textItemArray![index] = changetype<ABCustomItem | null>(this.list!.objectArray![index]);
        }
        return textItemArray;
    }
}

