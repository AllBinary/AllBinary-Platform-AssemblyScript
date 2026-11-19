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
// package org.allbinary.globals
// import org.allbinary.business.init.InitInfo
// import org.allbinary.logic.string.StringValidationUtil

@global export class WebAppUrlGlobals extends UrlGlobalsInterface {

    jclassName(): string {
        return "org.allbinary.globals.WebAppUrlGlobals";
    }
    path: string | null = null;
    isWebappPathSet: bool = false;

    jfields_WebAppUrlGlobals(): void {
    this.path = null;
    this.isWebappPathSet = false;
    }

    jinit_WebAppUrlGlobals_0(): WebAppUrlGlobals {
        super.jinit_UrlGlobalsInterface_0();
        this.jfields_WebAppUrlGlobals();
        return this;
    }
    

    isTestingMode(): bool {
        return InitInfo.getInstance()!.isTesting();
    }
    

    getWebappPath(): string | null {
        return this.path;
    }
    

    setWebappPath(path: string | null): void {
        path = path;
        this.isWebappPathSet = true;
    }
    

    getTestHtmlPath(): string | null {
        return InitInfo.getInstance()!.getTestHtmlPath();
    }
    

    getMainPath(): string | null {
        let mainPath: string | null = InitInfo.getInstance()!.getMainPath(); if (JThrowable.pending !== null) return null;
        if (!StringValidationUtil.getInstance()!.isEmpty(mainPath)) {
            return mainPath;
        } else if (this.isWebappPathSet) {
            return this.getWebappPath();
        } else {
            { JThrowable.raise(new JException().jinit_JException_1("Webapp Path is not set")); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

