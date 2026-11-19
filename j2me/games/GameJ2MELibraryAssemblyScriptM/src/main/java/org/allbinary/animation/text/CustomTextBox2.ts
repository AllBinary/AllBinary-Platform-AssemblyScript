/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2022 AllBinary 
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
// package org.allbinary.animation.text
// import javax.microedition.lcdui.CommandListener
// import javax.microedition.lcdui.Font
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.form.item.CustomTextBox

@global export class CustomTextBox2 extends CustomTextBox {

    jclassName(): string {
        return "org.allbinary.animation.text.CustomTextBox2";
    }
    

    jinit_CustomTextBox2_8(cmdListener: CommandListener | null, label: string | null, text: string | null, maxSize: i32, constraints: i32, font: Font | null, backgroundBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null): CustomTextBox2 {
        super.jinit_CustomTextBox_8(cmdListener, label, text, maxSize, constraints, font, backgroundBasicColor, foregroundBasicColor);
        this.getTextFieldItem()!.setFocus(true); if (JThrowable.pending !== null) return this;
        return this;
    }
}

