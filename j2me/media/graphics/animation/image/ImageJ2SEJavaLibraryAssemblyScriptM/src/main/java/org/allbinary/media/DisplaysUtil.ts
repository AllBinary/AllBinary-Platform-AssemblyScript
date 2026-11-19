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
// package org.allbinary.media
// import java.awt.Dimension
// import java.awt.DisplayMode
// import java.awt.GraphicsDevice
// import java.awt.GraphicsEnvironment
// import java.awt.Toolkit
// import org.allbinary.graphics.PointFactory
// import org.allbinary.graphics.Rectangle

@global export class DisplaysUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.media.DisplaysUtil";
    }
    @lazy static jv_instance: DisplaysUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): DisplaysUtil | null {
        if (!DisplaysUtil.js_instance) {
            DisplaysUtil.js_instance = true;
            DisplaysUtil.jv_instance = new DisplaysUtil().jinit_DisplaysUtil_0();
        }
        return DisplaysUtil.jv_instance;
    }
    static set instance(value: DisplaysUtil | null) {
        DisplaysUtil.js_instance = true;
        DisplaysUtil.jv_instance = value;
    }

    jinit_DisplaysUtil_0(): DisplaysUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): DisplaysUtil | null {
        return DisplaysUtil.instance;
    }
    

    getPrimaryScreenSize(): Rectangle | null {
        let dimension: Dimension | null = Toolkit.getDefaultToolkit()!.getScreenSize(); if (JThrowable.pending !== null) return null;
        return new Rectangle().jinit_Rectangle_3(PointFactory.getInstance()!.ZERO_ZERO, dimension!.width, dimension!.height);
    }
    

    getScreenSizesAsRectangleArray(): StaticArray<Rectangle | null> | null {
        let graphicsEnvironment: GraphicsEnvironment | null = GraphicsEnvironment.getLocalGraphicsEnvironment(); if (JThrowable.pending !== null) return null;
        let graphicsDeviceArray: StaticArray<GraphicsDevice | null> | null = graphicsEnvironment!.getScreenDevices(); if (JThrowable.pending !== null) return null;
        let graphicsDevice: GraphicsDevice | null = null;
        let displayMode: DisplayMode | null = null;
        let rectangle: Rectangle | null = null;
        let size: i32 = graphicsDeviceArray!.length;
        let rectangleArray: StaticArray<Rectangle | null> | null = new StaticArray<Rectangle | null>(size);
        for (let index: i32 = 0; index < size; index++) {
            graphicsDevice = graphicsDeviceArray![index];
            displayMode = graphicsDevice!.getDisplayMode(); if (JThrowable.pending !== null) return null;
            rectangle = new Rectangle().jinit_Rectangle_3(PointFactory.getInstance()!.ZERO_ZERO, displayMode!.getWidth(), displayMode!.getHeight()); if (JThrowable.pending !== null) return null;
            rectangleArray![index] = rectangle;
        } if (JThrowable.pending !== null) return null;
        return rectangleArray;
    }
}

