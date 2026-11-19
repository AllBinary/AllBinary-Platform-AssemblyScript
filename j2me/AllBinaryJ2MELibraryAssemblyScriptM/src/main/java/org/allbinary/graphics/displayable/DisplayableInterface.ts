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
// package org.allbinary.graphics.displayable
// import javax.microedition.lcdui.Command
// import javax.microedition.lcdui.CommandListener

@global export interface DisplayableInterface {
    

    addCommand(cmd: Command | null): void;
    

    getHeight(): i32;
    

    getWidth(): i32;
    

    removeCommand(cmd: Command | null): void;
    

    setCommandListener(l: CommandListener | null): void;
}

