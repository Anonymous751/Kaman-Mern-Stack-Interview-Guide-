
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

// =============================
// Yup Validation Schema
// =============================

const BlogSchema = Yup.object().shape({
    title: Yup.string()
        .min(5, "Title must be at least 5 characters")
        .max(120, "Title cannot exceed 120 characters")
        .required("Title is required"),

    slug: Yup.string()
        .matches(
            /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
            "Slug can only contain lowercase letters, numbers and hyphens"
        )
        .required("Slug is required"),

    category: Yup.string()
        .required("Category is required"),

    description: Yup.string()
        .min(20, "Description must be at least 20 characters")
        .max(300, "Description cannot exceed 300 characters")
        .required("Description is required"),

    image: Yup.mixed()
        .required("Featured image is required")
        .test(
            "fileType",
            "Only JPG, PNG and WEBP images are allowed",
            (value) => {
                if (!value) return true;

                return [
                    "image/jpeg",
                    "image/png",
                    "image/webp",
                ].includes(value.type);
            }
        )
        .test(
            "fileSize",
            "Image must be less than 5MB",
            (value) => {
                if (!value) return true;

                return value.size <= 5 * 1024 * 1024;
            }
        ),

    content: Yup.string()
        .min(50, "Content must be at least 50 characters")
        .required("Content is required"),

    author: Yup.string()
        .required("Author is required"),

    tags: Yup.string()
        .required("At least one tag is required"),

    status: Yup.string()
        .oneOf(
            ["draft", "published"],
            "Invalid status"
        )
        .required("Status is required"),
});

// =============================
// Create Blog Page
// =============================

const CreateBlogPage = () => {
    // =============================
    // Page-level messages
    // =============================

    const [serverError, setServerError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    return (
        <div className="min-h-screen bg-[#F5F5F2] py-12 px-6">

            <div className="max-w-4xl mx-auto">

                {/* =============================
                    PAGE HEADER
                ============================== */}

                <div className="mb-10">

                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                        Blog Management
                    </p>

                    <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-[#111111]">
                        Create a Blog
                    </h1>

                    <p className="mt-4 max-w-2xl text-gray-500 leading-relaxed">
                        Create and publish a new article with structured content,
                        categories, tags and publishing settings.
                    </p>

                </div>

                {/* =============================
                    SUCCESS MESSAGE
                ============================== */}

                {successMessage && (
                    <div className="mb-6 rounded-lg border border-green-200 bg-green-50 px-5 py-4 text-sm text-green-700">
                        <div className="flex items-start gap-3">
                            <span className="text-lg">✓</span>

                            <div>
                                <p className="font-semibold">
                                    Blog created successfully
                                </p>

                                <p className="mt-1">
                                    {successMessage}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* =============================
                    SERVER ERROR MESSAGE
                ============================== */}

                {serverError && (
                    <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
                        <div className="flex items-start gap-3">

                            <span className="text-lg">
                                ⚠
                            </span>

                            <div>
                                <p className="font-semibold">
                                    Unable to create blog
                                </p>

                                <p className="mt-1">
                                    {serverError}
                                </p>
                            </div>

                        </div>
                    </div>
                )}

                {/* =============================
                    FORM
                ============================== */}

                <Formik
                    initialValues={{
                        title: "",
                        slug: "",
                        category: "",
                        description: "",
                        image: null,
                        content: "",
                        author: "",
                        tags: "",
                        status: "draft",
                    }}

                    validationSchema={BlogSchema}

                    onSubmit={async (
                        values,
                        {
                            resetForm,
                            setSubmitting,
                        }
                    ) => {

                        // Clear previous messages
                        setServerError("");
                        setSuccessMessage("");

                        try {

                            console.log(
                                "🔥 SUBMIT FIRED",
                                values
                            );

                            // =============================
                            // Create FormData
                            // =============================

                            const formData = new FormData();

                            formData.append(
                                "title",
                                values.title
                            );

                            formData.append(
                                "slug",
                                values.slug
                            );

                            formData.append(
                                "category",
                                values.category
                            );

                            formData.append(
                                "description",
                                values.description
                            );

                            formData.append(
                                "content",
                                values.content
                            );

                            formData.append(
                                "author",
                                values.author
                            );

                            formData.append(
                                "tags",
                                values.tags
                            );

                            formData.append(
                                "status",
                                values.status
                            );

                            formData.append(
                                "image",
                                values.image
                            );

                            console.log(
                                "📤 Sending blog data..."
                            );

                            // =============================
                            // API Request
                            // =============================

                            const response = await axios.post(
                                `${import.meta.env.VITE_API_URL}/blogs`,
                                formData
                            );

                            console.log(
                                "✅ Blog created:",
                                response.data
                            );
                            alert("Blog created successfully!");
                            resetForm()

                            // =============================
                            // SUCCESS
                            // =============================

                            setSuccessMessage(
                                response.data?.message ||
                                "Your blog has been created successfully."
                            );

                            setServerError("");

                            // Reset only after successful creation
                            resetForm();

                        } catch (error) {

                            console.error(
                                "❌ Failed to create blog:",
                                error
                            );

                            // =============================
                            // Axios / Backend Errors
                            // =============================

                            if (axios.isAxiosError(error)) {

                                // --------------------------------
                                // Server responded with status code
                                // --------------------------------

                                if (error.response) {

                                    const status =
                                        error.response.status;

                                    const backendMessage =
                                        error.response.data?.message;

                                    // =============================
                                    // 400 Bad Request
                                    // =============================

                                    if (status === 400) {

                                        setServerError(
                                            backendMessage ||
                                            "The submitted blog data is invalid. Please check your information and try again."
                                        );

                                    }

                                    // =============================
                                    // 401 Unauthorized
                                    // =============================

                                    else if (status === 401) {

                                        setServerError(
                                            backendMessage ||
                                            "You are not authorized to create a blog. Please log in and try again."
                                        );

                                    }

                                    // =============================
                                    // 403 Forbidden
                                    // =============================

                                    else if (status === 403) {

                                        setServerError(
                                            backendMessage ||
                                            "You do not have permission to create a blog."
                                        );

                                    }

                                    // =============================
                                    // 404 Not Found
                                    // =============================

                                    else if (status === 404) {

                                        setServerError(
                                            backendMessage ||
                                            "The blog API endpoint could not be found. Please check the server configuration."
                                        );

                                    }

                                    // =============================
                                    // 409 Duplicate
                                    // =============================

                                    else if (status === 409) {

                                        setServerError(
                                            backendMessage ||
                                            "A blog with this slug already exists. Please choose a different slug."
                                        );

                                    }

                                    // =============================
                                    // 413 File Too Large
                                    // =============================

                                    else if (status === 413) {

                                        setServerError(
                                            backendMessage ||
                                            "The uploaded image is too large. Please select an image smaller than 5MB."
                                        );

                                    }

                                    // =============================
                                    // 422 Validation Error
                                    // =============================

                                    else if (status === 422) {

                                        setServerError(
                                            backendMessage ||
                                            "The server could not validate your blog data. Please check the form and try again."
                                        );

                                    }

                                    // =============================
                                    // 500 Server Error
                                    // =============================

                                    else if (status === 500) {

                                        setServerError(
                                            backendMessage ||
                                            "The server encountered an error while creating the blog. Please try again later."
                                        );

                                    }

                                    // =============================
                                    // Other HTTP Errors
                                    // =============================

                                    else {

                                        setServerError(
                                            backendMessage ||
                                            `Unable to create the blog. Server returned error ${status}.`
                                        );

                                    }
                                }

                                // --------------------------------
                                // Request sent but no response
                                // --------------------------------

                                else if (error.request) {

                                    setServerError(
                                        "The server did not respond. Please make sure your backend server is running and try again."
                                    );

                                }

                                // --------------------------------
                                // Axios configuration error
                                // --------------------------------

                                else {

                                    setServerError(
                                        error.message ||
                                        "An error occurred while preparing the request."
                                    );

                                }

                            }

                            // =============================
                            // Non-Axios Error
                            // =============================

                            else if (error instanceof Error) {

                                setServerError(
                                    error.message ||
                                    "An unexpected error occurred while creating the blog."
                                );

                            }

                            // =============================
                            // Completely Unknown Error
                            // =============================

                            else {

                                setServerError(
                                    "An unexpected error occurred. Please try again."
                                );

                            }

                            // IMPORTANT:
                            // Do NOT reset the form after an error.
                            // User's entered data remains intact.

                        } finally {

                            setSubmitting(false);

                        }
                    }}
                >

                    {({
                        values,
                        errors,
                        touched,
                        setFieldValue,
                        isSubmitting,
                    }) => (

                        <Form className="bg-white border border-gray-200 rounded-xl p-6 md:p-10">

                            {/* =============================
                                BASIC INFORMATION
                            ============================== */}

                            <div className="mb-10">

                                <div className="mb-6">

                                    <h2 className="text-xl font-semibold text-[#111111]">
                                        Basic Information
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-500">
                                        Add the main information about your article.
                                    </p>

                                </div>

                                {/* Title */}

                                <div className="mb-6">

                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Blog Title
                                    </label>

                                    <Field
                                        name="title"
                                        type="text"
                                        placeholder="Enter your blog title"
                                        className={`w-full px-4 py-3 border rounded-lg outline-none transition
                                            ${
                                                errors.title &&
                                                touched.title
                                                    ? "border-red-500"
                                                    : "border-gray-300 focus:border-[#111111]"
                                            }`}
                                    />

                                    <ErrorMessage
                                        name="title"
                                        component="p"
                                        className="mt-1 text-sm text-red-500"
                                    />

                                </div>

                                {/* Slug */}

                                <div className="mb-6">

                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Slug
                                    </label>

                                    <Field
                                        name="slug"
                                        type="text"
                                        placeholder="the-future-of-modern-web-development"
                                        className={`w-full px-4 py-3 border rounded-lg outline-none transition
                                            ${
                                                errors.slug &&
                                                touched.slug
                                                    ? "border-red-500"
                                                    : "border-gray-300 focus:border-[#111111]"
                                            }`}
                                    />

                                    <ErrorMessage
                                        name="slug"
                                        component="p"
                                        className="mt-1 text-sm text-red-500"
                                    />

                                    <p className="mt-2 text-xs text-gray-400">
                                        Used for the blog URL.
                                    </p>

                                </div>

                                {/* Category + Author */}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                    {/* Category */}

                                    <div>

                                        <label className="block text-sm font-medium text-gray-800 mb-2">
                                            Category
                                        </label>

                                        <Field
                                            as="select"
                                            name="category"
                                            className={`w-full px-4 py-3 border rounded-lg bg-white outline-none
                                                ${
                                                    errors.category &&
                                                    touched.category
                                                        ? "border-red-500"
                                                        : "border-gray-300"
                                                }`}
                                        >

                                            <option value="">
                                                Select category
                                            </option>

                                            <option value="Technology">
                                                Technology
                                            </option>

                                            <option value="Development">
                                                Development
                                            </option>

                                            <option value="Engineering">
                                                Engineering
                                            </option>

                                            <option value="Design">
                                                Design
                                            </option>

                                            <option value="DevOps">
                                                DevOps
                                            </option>

                                        </Field>

                                        <ErrorMessage
                                            name="category"
                                            component="p"
                                            className="mt-1 text-sm text-red-500"
                                        />

                                    </div>

                                    {/* Author */}

                                    <div>

                                        <label className="block text-sm font-medium text-gray-800 mb-2">
                                            Author
                                        </label>

                                        <Field
                                            name="author"
                                            type="text"
                                            placeholder="Author name"
                                            className={`w-full px-4 py-3 border rounded-lg outline-none
                                                ${
                                                    errors.author &&
                                                    touched.author
                                                        ? "border-red-500"
                                                        : "border-gray-300"
                                                }`}
                                        />

                                        <ErrorMessage
                                            name="author"
                                            component="p"
                                            className="mt-1 text-sm text-red-500"
                                        />

                                    </div>

                                </div>

                            </div>

                            {/* =============================
                                DESCRIPTION
                            ============================== */}

                            <div className="mb-10">

                                <div className="mb-6">

                                    <h2 className="text-xl font-semibold text-[#111111]">
                                        Article Description
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-500">
                                        Write a short summary that appears on blog cards.
                                    </p>

                                </div>

                                <Field
                                    as="textarea"
                                    name="description"
                                    rows="4"
                                    placeholder="Write a short description..."
                                    className={`w-full px-4 py-3 border rounded-lg resize-none outline-none
                                        ${
                                            errors.description &&
                                            touched.description
                                                ? "border-red-500"
                                                : "border-gray-300 focus:border-[#111111]"
                                        }`}
                                />

                                <ErrorMessage
                                    name="description"
                                    component="p"
                                    className="mt-1 text-sm text-red-500"
                                />

                            </div>

                            {/* =============================
                                FEATURED IMAGE
                            ============================== */}

                            <div className="mb-10">

                                <div className="mb-6">

                                    <h2 className="text-xl font-semibold text-[#111111]">
                                        Featured Image
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-500">
                                        JPG, PNG or WEBP. Maximum size 5MB.
                                    </p>

                                </div>

                                <div>

                                    {/* Hidden file input */}

                                    <input
                                        id="image-upload"
                                        type="file"
                                        name="image"
                                        accept="image/jpeg,image/png,image/webp"
                                        className="hidden"
                                        onChange={(event) => {

                                            const file =
                                                event.currentTarget.files?.[0];

                                            setFieldValue(
                                                "image",
                                                file || null
                                            );

                                            // Clear server error when
                                            // user selects a new image
                                            setServerError("");
                                        }}
                                    />

                                    {/* Upload button */}

                                    <label
                                        htmlFor="image-upload"
                                        className="
                                            inline-flex items-center gap-2
                                            rounded-md
                                            bg-blue-600
                                            px-5 py-2.5
                                            text-sm font-medium text-white
                                            cursor-pointer
                                            transition
                                            hover:bg-blue-700
                                        "
                                    >
                                        📤 Upload Featured Image
                                    </label>

                                    {/* Selected filename */}

                                    {values.image && (

                                        <p className="mt-3 text-sm text-gray-600">

                                            Selected:{" "}

                                            <span className="font-medium text-gray-900">
                                                {values.image.name}
                                            </span>

                                        </p>

                                    )}

                                    {/* Validation error */}

                                    <ErrorMessage
                                        name="image"
                                        component="p"
                                        className="mt-2 text-sm text-red-500"
                                    />

                                </div>

                            </div>

                            {/* =============================
                                ARTICLE CONTENT
                            ============================== */}

                            <div className="mb-10">

                                <div className="mb-6">

                                    <h2 className="text-xl font-semibold text-[#111111]">
                                        Article Content
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-500">
                                        Write the complete content of your article.
                                    </p>

                                </div>

                                <Field
                                    as="textarea"
                                    name="content"
                                    rows="14"
                                    placeholder="Write your article here..."
                                    className={`w-full px-4 py-4 border rounded-lg resize-y outline-none leading-relaxed
                                        ${
                                            errors.content &&
                                            touched.content
                                                ? "border-red-500"
                                                : "border-gray-300 focus:border-[#111111]"
                                        }`}
                                />

                                <ErrorMessage
                                    name="content"
                                    component="p"
                                    className="mt-1 text-sm text-red-500"
                                />

                            </div>

                            {/* =============================
                                TAGS
                            ============================== */}

                            <div className="mb-10">

                                <label className="block text-sm font-medium text-gray-800 mb-2">
                                    Tags
                                </label>

                                <Field
                                    name="tags"
                                    type="text"
                                    placeholder="React, JavaScript, Web Development"
                                    className={`w-full px-4 py-3 border rounded-lg outline-none
                                        ${
                                            errors.tags &&
                                            touched.tags
                                                ? "border-red-500"
                                                : "border-gray-300"
                                        }`}
                                />

                                <ErrorMessage
                                    name="tags"
                                    component="p"
                                    className="mt-1 text-sm text-red-500"
                                />

                                <p className="mt-2 text-xs text-gray-400">
                                    Separate multiple tags with commas.
                                </p>

                            </div>

                            {/* =============================
                                PUBLISHING
                            ============================== */}

                            <div className="mb-10">

                                <div className="mb-6">

                                    <h2 className="text-xl font-semibold text-[#111111]">
                                        Publishing
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-500">
                                        Choose whether the article should remain a draft or be published.
                                    </p>

                                </div>

                                <Field
                                    as="select"
                                    name="status"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white outline-none"
                                >

                                    <option value="draft">
                                        Draft
                                    </option>

                                    <option value="published">
                                        Published
                                    </option>

                                </Field>

                                <ErrorMessage
                                    name="status"
                                    component="p"
                                    className="mt-1 text-sm text-red-500"
                                />

                            </div>

                            {/* =============================
                                ACTIONS
                            ============================== */}

                            <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-3 sm:justify-end">

                                <button
                                    type="reset"
                                    disabled={isSubmitting}
                                    onClick={() => {
                                        setServerError("");
                                        setSuccessMessage("");
                                    }}
                                    className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition disabled:opacity-50"
                                >
                                    Reset
                                </button>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-7 py-3 bg-[#111111] text-white rounded-lg font-medium hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
                                >

                                    {isSubmitting
                                        ? "Creating Blog..."
                                        : "Create Blog"}

                                </button>

                            </div>

                        </Form>

                    )}

                </Formik>

            </div>

        </div>
    );
};

export default CreateBlogPage;
