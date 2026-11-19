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
// package org.allbinary.logic.java.anyType.clazz.loader

@global export class ClassLoaderUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.java.anyType.clazz.loader.ClassLoaderUtil";
    }
    

    jinit_ClassLoaderUtil_0(): ClassLoaderUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static getName(anyType: Object | null): string | null {
        let classLoader: JClassLoader | null = JObject.jclassOf(anyType)!.getClassLoader(); if (JThrowable.pending !== null) return null;
        if (classLoader != null) {
            return jstr("ClassLoader: ") + jstr(JObject.jclassOf(classLoader)!.getName());
        } if (JThrowable.pending !== null) return null;
        { JThrowable.raise(new JException().jinit_JException_1("Unable to get ClassLoader")); return null; }
        return null;
    }
}

