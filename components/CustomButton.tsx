"use client";
import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/type';

const CustomButton = ({ title, containerStyles, handleClick }: CustomButtonProps) => {
    return (
        <button className={`custom-btn ${containerStyles}`}
            disabled={false}
            type={"button"}
            onClick={handleClick}
        >
            <span className={`flex-1`}>
                {title}
            </span>
        </button>
    )
}

export default CustomButton
