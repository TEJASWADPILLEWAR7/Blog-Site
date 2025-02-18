import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form"
import Button from "../Button.jsx"
import Input from "../Input.jsx"
import RTE from "../RTE.jsx"
import Select from "../Select.jsx"
import appwriteSerice from "../../appwrite/config.js"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post.title || "",
            slug: post?.slug || "",
            content: post.content || "",
            status: post.status || "active",

        }
    })

    const navigate = useNavigate()

    const userData = useSelector((state) => state.auth.userData)

    const submit = async (data) => { }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string") {
            return value.trim().toLowerCase().replace(/[^a-zA-Z\d\s]+/g, "-").replace(/\s/g, "-")

        }
    }, [])

    useEffect(() => {
        watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true })
            }
        })
    }, [watch, slugTransform, setValue])

    return (
        <form onSubmit={handleSubmit(submit)}
            className="flex flex-wrap"
        >

        </form>
    )


}