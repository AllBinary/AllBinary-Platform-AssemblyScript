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
// package org.allbinary.logic.java.jar
// import java.io.IOException
// import java.net.URL
// import java.net.URLConnection
// import java.util.jar.JarEntry
// import java.util.jar.JarInputStream

@global export class JarUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.java.jar.JarUtil";
    }
    jarURL: JURL | null = null;

    jfields_JarUtil(): void {
    
    }
    

    jinit_JarUtil_1(jarURL: JURL | null): JarUtil {
        super.jinit_JObject_0();
        this.jfields_JarUtil();
        this.jarURL = jarURL;
        return this;
    }
    

    show(): void {
        let cache: StaticArray<i8> | null = new StaticArray<i8>(1024);
        do {
            let conn: URLConnection | null = this.jarURL!.openConnection(); if (JThrowable.pending !== null) break;
            let jis: JarInputStream | null = new JarInputStream().jinit_JarInputStream_1(conn!.getInputStream()); if (JThrowable.pending !== null) break;
            while (true) {
                let entry: JarEntry | null = jis!.getNextJarEntry(); if (JThrowable.pending !== null) break;
                if (entry != null) {
                    if (!entry!.isDirectory()) {
                        let offset: i32 = 0;
                        let i: i32 = 0;
                        while (((i = jis!.read(cache, offset, cache!.length - offset))) != -1) {
                            offset += i;
                            if (offset >= cache!.length) {
                                let newcache: StaticArray<i8> | null = new StaticArray<i8>(cache!.length + 1024);
                                JSystem.arraycopy(cache, 0, newcache, 0, cache!.length); if (JThrowable.pending !== null) break;
                                cache = newcache;
                            } if (JThrowable.pending !== null) break;
                        } if (JThrowable.pending !== null) break;
                        let tmp: StaticArray<i8> | null = new StaticArray<i8>(offset);
                        JSystem.arraycopy(cache, 0, tmp, 0, offset); if (JThrowable.pending !== null) break;
                        JSystem.println(jstr(entry!.getName())); if (JThrowable.pending !== null) break;
                    } if (JThrowable.pending !== null) break;
                } else {
                    break;
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null && JThrowable.pending instanceof JIOException) {
            let ex: JIOException | null = changetype<JIOException | null>(JThrowable.take());
            JSystem.println(jstr(ex)); if (JThrowable.pending !== null) return;
            ex!.printStackTrace(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    static main(args: StaticArray<string | null> | null): void {
        new JarUtil().jinit_JarUtil_1(new JURL().jinit_JURL_1("file:///G:/mnt/bc/mydev/working/j2me/MiniSpaceWars/MiniSpaceWars/dist/MiniSpaceWars.jar"))!.show(); if (JThrowable.pending !== null) return;
    }
}

