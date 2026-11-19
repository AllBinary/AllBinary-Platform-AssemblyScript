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
// package org.allbinary.logic.util.event.handler
// import jsinterop.annotations.JsType
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventListenerInterface
// import org.allbinary.util.BasicArrayList
// import jsinterop.annotations.JsMethod

@global export interface BasicEventHandlerInterface {
    

    addListenerInterface(eventListenerInterface: EventListenerInterface | null): void;
    

    addListeners(basicArrayList: BasicArrayList | null): void;
    

    fireEvent(eventObject: AllBinaryEventObject | null): void;
    

    removeAllListeners(): void;
    

    removeListener(eventListenerInterface: EventListenerInterface | null): void;
}

