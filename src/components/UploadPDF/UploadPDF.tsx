import React, { useState } from "react";
import axios from "axios";

const UploadPDF: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [technology, setTechnology] = useState<string | null>('Python');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
        const selectedFile = event.target.files[0];

        if (selectedFile.type === "application/pdf") {
            setFile(selectedFile);
            setErrorMessage(null);
        } else {
            setFile(null);
            setErrorMessage("Please select a PDF file.");
        }
        }
    };

    const handleTechnologyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTechnology(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const base64Data = reader.result?.toString().split(",")[1];
                const formData = new FormData();
                formData.append("pdf", base64Data as string);
                formData.append("technology", technology as string);
                console.log(formData.get('technology'));
                axios.post("http://example.com/upload-pdf", formData)
                    .then((response) => {
                        console.log(response.data);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            };
        }
    };

    return (
        <>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Upload a new PDF</h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="technology" className="block text-sm font-medium text-gray-700">
                        Select Technology:
                    </label>
                    <div className="mt-1">
                        <select
                            id="technology"
                            name="technology"
                            onChange={handleTechnologyChange}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        >
                            <option value="Python">Python</option>
                            <option value="Java">Java</option>
                            <option value="SQL">SQL</option>
                        </select>
                    </div>
                    <label htmlFor="pdf" className="block text-sm font-medium text-gray-700">
                        Select PDF:
                    </label>
                    <div className="mt-1">
                        <input
                        id="pdf"
                        name="pdf"
                        type="file"
                        onChange={handleFileChange}
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                        {errorMessage && (
                        <p className="mt-2 text-sm text-red-600" id="file-validation-error">
                            {errorMessage}
                        </p>
                        )}
                    </div>
                </div>

                <div>
                <button
                    type="submit"
                    disabled={!file}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Upload
                </button>
                </div>
            </form>
            </div>
        </div>
        </>
    );
    };

    export default UploadPDF;
