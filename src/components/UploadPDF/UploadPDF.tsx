import React, { useState } from "react";
import axios from "axios";

const UploadPDF: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [currentFile, setCurrentFile] = useState<string | ArrayBuffer | null>(
        null
      );
    const [technology, setTechnology] = useState<string>('Python');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [fileName, setFileName] = useState<string>("");

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const selectedFile = event.target.files[0];
            if (selectedFile.type === "application/pdf") {
                setFile(selectedFile);
                setFileName(selectedFile.name);
                setErrorMessage(null);
            } else {
                setFile(null);
                setFileName("");
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
                setCurrentFile(reader.result as string);
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

    const removeFile = () => {
        setFileName("");
        setFile(null);
        setCurrentFile(null);
    };

    return (
        <>
        <div className="mt-8 mx-auto w-full max-w-md">
            <div className="bg-white py-8 px-4 shadow rounded-lg px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="technology" className="block text-lg font-medium text-gray-700">
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
                        <label>
                            <input type="file" className="text-sm text-grey-500
                                file:mr-5 file:py-2 file:px-6
                                file:rounded-full file:border-0
                                file:text-sm file:font-medium
                                file:bg-[#009879] file:text-white
                                hover:file:cursor-pointer hover:file:bg-[#0bb894]"
                                id="pdf"
                                name="pdf"
                                accept="application/pdf"
                                onChange={handleFileChange} />
                        </label>

                        {errorMessage && (
                        <p className="mt-2 text-sm text-red-600" id="file-validation-error">
                            {errorMessage}
                        </p>
                        )}
                    </div>
                </div>    

                {currentFile && (
                     <embed src={currentFile.toString()} width="300" height="500" type='application/pdf'></embed>
                )}

                <div>
                <button
                    type="submit"
                    disabled={!file}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#009879] hover:bg-[#0bb894] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Upload
                </button>
                </div>
                <div>
                    {file && (
                        <button onClick={() => removeFile()}
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#FA654F] hover:bg-[#FAA69B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Cancel
                        </button>
                    )}
                </div>
                
            </form>
            </div>
        </div>
        </>
    );
    };

    export default UploadPDF;
