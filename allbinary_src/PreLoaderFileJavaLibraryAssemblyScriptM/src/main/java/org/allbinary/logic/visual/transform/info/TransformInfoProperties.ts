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
// package org.allbinary.logic.visual.transform.info

@global export class TransformInfoProperties extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.transform.info.TransformInfoProperties";
    }
    name: string | null = null;
    label: string | null = null;
    description: string | null = null;
    objectFileName: string | null = null;
    objectConfigFileName: string | null = null;
    templateFileName: string | null = null;

    jfields_TransformInfoProperties(): void {
    
    
    
    
    
    
    }
    

    jinit_TransformInfoProperties_6(name: string | null, label: string | null, description: string | null, objectFileName: string | null, objectConfigFileName: string | null, templateFileName: string | null): TransformInfoProperties {
        super.jinit_JObject_0();
        this.jfields_TransformInfoProperties();
        this.name = name;
        this.label = label;
        this.description = description;
        this.objectFileName = objectFileName;
        this.templateFileName = templateFileName;
        this.objectConfigFileName = objectConfigFileName;
        return this;
    }
    

    setName(value: string | null): void {
        this.name = value;
    }
    

    setDescription(value: string | null): void {
        this.description = value;
    }
    

    setViewFile(value: string | null): void {
        this.objectFileName = value;
    }
    

    setTemplateFile(value: string | null): void {
        this.templateFileName = value;
    }
    

    setObjectConfigFile(value: string | null): void {
        this.objectConfigFileName = value;
    }
    

    getName(): string | null {
        return this.name;
    }
    

    getLabel(): string | null {
        return this.label;
    }
    

    getDescription(): string | null {
        return this.description;
    }
    

    getViewFile(): string | null {
        return this.objectFileName;
    }
    

    getTemplateFile(): string | null {
        return this.templateFileName;
    }
    

    getObjectConfigFile(): string | null {
        return this.objectConfigFileName;
    }
}

