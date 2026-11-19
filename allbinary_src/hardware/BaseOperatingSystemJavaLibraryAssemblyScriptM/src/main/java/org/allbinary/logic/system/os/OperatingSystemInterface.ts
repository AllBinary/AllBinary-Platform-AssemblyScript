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
// package org.allbinary.logic.system.os
// import org.allbinary.logic.java.character.CharacterSet

@global export interface OperatingSystemInterface {
    

    getName(): string | null;
    

    getVersion(): string | null;
    

    getArch(): string | null;
    

    getCharacterSet(): CharacterSet | null;
    

    isOverScan(): bool;
    

    getOverScanXPercent(): i32;
    

    getOverScanYPercent(): i32;
    

    isScalable(): bool;
    

    isAutoHide(): bool;
    

    toString(): string | null;
}

