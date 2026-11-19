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
// package org.allbinary.business.init
// import org.allbinary.logic.io.path.AbPath

@global export interface InitInfoInterface {
    

    isTesting(): bool;
    

    getTesting(): string | null;
    

    getTestHtmlPath(): string | null;
    

    getMainPath(): string | null;
    

    setTesting(value: string | null): void;
    

    setTestHtmlPath(value: AbPath | null): void;
    

    setMainPath(value: AbPath | null): void;
    

    isTestingValid(testing: string | null): bool;
    

    isTestHtmlPathValid(value: AbPath | null): bool;
    

    isMainPathValid(value: AbPath | null): bool;
}

