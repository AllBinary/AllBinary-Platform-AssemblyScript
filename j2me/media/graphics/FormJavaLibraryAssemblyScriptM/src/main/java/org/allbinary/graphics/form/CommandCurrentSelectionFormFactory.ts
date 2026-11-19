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
// package org.allbinary.graphics.form
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.game.configuration.feature.TouchFeatureFactory
// import org.allbinary.graphics.Rectangle
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.form.item.ABCustomItem

@global export class CommandCurrentSelectionFormFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.form.CommandCurrentSelectionFormFactory";
    }

    jinit_CommandCurrentSelectionFormFactory_0(): CommandCurrentSelectionFormFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance8(title: string | null, items: StaticArray<ABCustomItem | null> | null, rectangle: Rectangle | null, formType: FormType | null, border: i32, moveForSmallScreen: bool, backgroundBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null): ScrollSelectionForm | null {
        if (Features.getInstance()!.isFeature(TouchFeatureFactory.getInstance()!.TOUCH_ENABLED)) {
            let scrollSelectionForm: ScrollSelectionForm | null = new CommandCurrentSelectionForm().jinit_CommandCurrentSelectionForm_6(title, items, border, moveForSmallScreen, backgroundBasicColor, foregroundBasicColor); if (JThrowable.pending !== null) return null;
            scrollSelectionForm!.init(rectangle, formType); if (JThrowable.pending !== null) return null;
            return scrollSelectionForm;
        } else {
            return ScrollSelectionFormNoneFactory.getInstance();
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

