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
// package org.allbinary.game.input.mapping
// import java.util.Enumeration
// import org.allbinary.game.configuration.persistance.GamePersistanceStrings
// import org.allbinary.game.input.Input
// import org.allbinary.game.input.InputPersistance
// import org.allbinary.game.input.mapping.event.InputMappingEvent
// import org.allbinary.game.input.mapping.event.InputMappingEventListenerInterface
// import org.allbinary.game.input.mapping.event.NullInputMappingEventListener
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.ABHashtable
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.EnumerationUtil

//GameInputPersistanceLibrary
@global export class PersistentInputMapping extends JObject {

    jclassName(): string {
        return "org.allbinary.game.input.mapping.PersistentInputMapping";
    }
    @lazy static jv_instance: Object | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Object | null {
        if (!PersistentInputMapping.js_instance) {
            PersistentInputMapping.js_instance = true;
            PersistentInputMapping.jv_instance = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return PersistentInputMapping.jv_instance;
    }
    static set instance(value: Object | null) {
        PersistentInputMapping.js_instance = true;
        PersistentInputMapping.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    enumerationUtil: EnumerationUtil | null = null;
    inputMapping: InputToGameKeyMapping | null = null;
    inputMappingEventListenerInterface: InputMappingEventListenerInterface | null = null;
    inputPersistance: InputPersistance | null = null;
    inputMappingEvent: InputMappingEvent | null = null;

    jfields_PersistentInputMapping(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.enumerationUtil = EnumerationUtil.getInstance();
    this.inputMapping = new InputToGameKeyMapping().jinit_InputToGameKeyMapping_0();
    this.inputMappingEventListenerInterface = NullInputMappingEventListener.NULL_INPUT_MAPPING_EVENT_LISTENER;
    
    this.inputMappingEvent = new InputMappingEvent().jinit_InputMappingEvent_1(this);
    }
    

    static getNullInstance(): PersistentInputMapping | null {
        if (PersistentInputMapping.instance == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            PersistentInputMapping.instance = new PersistentInputMapping().jinit_PersistentInputMapping_1(GamePersistanceStrings.getInstance()!.SAVED_INPUT_CONFIGURATION_RECORD_ID); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<PersistentInputMapping | null>(PersistentInputMapping.instance);
    }
    

    jinit_PersistentInputMapping_1(name: string | null): PersistentInputMapping {
        super.jinit_JObject_0();
        this.jfields_PersistentInputMapping();
        this.inputPersistance = new InputPersistance().jinit_InputPersistance_1(name); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getTotalMapped(): i32 {
        return this.getInputMapping()!.getHashtable()!.size();
    }
    

    isDefaultNew(): bool {
        return false;
    }
    

    getDefault(): InputToGameKeyMapping | null {
        return InputToGameKeyMapping.getNullInstance();
    }
    

    setDefault(abeClientInformation: AbeClientInformationInterface | null): void {
        this.getInputMapping()!.removeAll(); if (JThrowable.pending !== null) return;
        this.getInputMapping()!.addMapping(this.getDefault()); if (JThrowable.pending !== null) return;
        this.save(abeClientInformation); if (JThrowable.pending !== null) return;
    }
    

    update(abeClientInformation: AbeClientInformationInterface | null): void {
        this.inputPersistance!.deleteAll(abeClientInformation); if (JThrowable.pending !== null) return;
        this.save(abeClientInformation); if (JThrowable.pending !== null) return;
    }
    

    save(abeClientInformation: AbeClientInformationInterface | null): void {
        this.inputPersistance!.save(abeClientInformation, this.getInputMapping()!.getHashtable()); if (JThrowable.pending !== null) return;
        this.inputMappingEvent!.setInputToGameKeyMapping(this.getInputMapping()); if (JThrowable.pending !== null) return;
        if (this.getInputMappingEventListenerInterface() != null) {
            this.getInputMappingEventListenerInterface()!.onInputMappingEvent(this.inputMappingEvent); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    init(abeClientInformation: AbeClientInformationInterface | null): void {
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.INIT); if (JThrowable.pending !== null) return;
        do {
            this.inputPersistance!.loadAll(abeClientInformation); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            PreLogUtil.putOE(this.commonStrings!.EXCEPTION, this, this.commonStrings!.INIT, e); if (JThrowable.pending !== null) return;
            this.inputPersistance!.deleteRecoreStore(abeClientInformation); if (JThrowable.pending !== null) return;
            this.setDefault(abeClientInformation); if (JThrowable.pending !== null) return;
            this.inputPersistance!.loadAll(abeClientInformation); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        let list: BasicArrayList | null = this.inputPersistance!.getList(); if (JThrowable.pending !== null) return;
        let totalMappedTo: i32 = 0;
        let size: i32 = list!.size(); if (JThrowable.pending !== null) return;
        let hashtable: ABHashtable | null = null;
        let enumeration: JEnumeration | null = null;
        let mappedToInput: Input | null = null;
        let gameActionInput: Input | null = null;
        for (let index: i32 = 0; index < size; index++) {
            hashtable = changetype<ABHashtable | null>(list!.objectArray![index]);
            enumeration = hashtable!.keys(); if (JThrowable.pending !== null) return;
            while (this.enumerationUtil!.hasMoreElements(enumeration)) {
                mappedToInput = changetype<Input | null>(this.enumerationUtil!.nextElement(enumeration)); if (JThrowable.pending !== null) return;
                gameActionInput = changetype<Input | null>(hashtable!.get(mappedToInput)); if (JThrowable.pending !== null) return;
                totalMappedTo++;
                this.getInputMapping()!.add(gameActionInput, mappedToInput); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        stringBuffer!.append("End - Total Loaded Keys Mapped: "); if (JThrowable.pending !== null) return;
        stringBuffer!.appendint(this.getTotalMapped()); if (JThrowable.pending !== null) return;
        stringBuffer!.append(" to: "); if (JThrowable.pending !== null) return;
        stringBuffer!.appendint(totalMappedTo); if (JThrowable.pending !== null) return;
        this.logUtil!.putF(JObject.jtoString(stringBuffer), this, this.commonStrings!.INIT); if (JThrowable.pending !== null) return;
    }
    

    setInputMappingEventListenerInterface(inputMappingEventListenerInterface: InputMappingEventListenerInterface | null): void {
        this.inputMappingEventListenerInterface = inputMappingEventListenerInterface;
    }
    

    getInputMappingEventListenerInterface(): InputMappingEventListenerInterface | null {
        return this.inputMappingEventListenerInterface;
    }
    

    getInputMapping(): InputToGameKeyMapping | null {
        return this.inputMapping;
    }
    

    isDelete(input: Input | null): bool {
        { JThrowable.raise(new JException().jinit_JException_1(this.commonStrings!.NOT_IMPLEMENTED)); return false; }
        return false;
    }
    

    isSystemInput(input: Input | null): bool {
        { JThrowable.raise(new JException().jinit_JException_1(this.commonStrings!.NOT_IMPLEMENTED)); return false; }
        return false;
    }
}

