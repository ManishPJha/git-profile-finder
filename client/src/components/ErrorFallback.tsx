const ErrorFallback = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-red-100 p-6">
            <div className="bg-white p-6 rounded-md shadow-md text-center">
                <h2 className="text-2xl font-semibold text-red-600 mb-4">
                    Oops! Something went wrong.
                </h2>
                <p className="text-gray-700">
                    An error occurred while rendering the component. Please check the console for
                    more information.
                </p>
            </div>
        </div>
    );
};

export default ErrorFallback;
