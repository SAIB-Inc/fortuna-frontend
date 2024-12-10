import { i } from "node_modules/vite/dist/node/types.d-aGj9QkWt";

interface SuccesModalProps {
    onClose: () => void;
    isLoading: boolean;
    txId: string;
}

const SuccesModal = ({ onClose, isLoading, txId }: SuccesModalProps) => {
    return (
        <div
            className="fixed inset-0 backdrop-blur-sm bg-black/30 z-10 flex items-center justify-center"
            onClick={!isLoading ? onClose : undefined}
        >
            <div
                className="flex flex-col items-center w-[500px] bg-[#15191e] rounded-lg p-8 text-white"
            >
                {isLoading ? (
                    <div className="flex items-center justify-center w-16 h-16 rounded-full /10 mb-6">
                        <div className="animate-spin rounded-full h-8 w-8 border-4 border-t-transparent border-[#00cdb8]"></div>
                    </div>
                ) : (
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#00cdb8]/10 mb-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-[#00cdb8]"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                )}

                <h2 className="text-white font-bold text-2xl mb-3">{isLoading ? "Hang Tight" : "Success!"}</h2>
                <p className="text-[#D1D5DB] text-md mb-1">
                    {isLoading ? "We're finalizing your transaction. Just a moment..." : "Your transaction has been processed successfully!"}
                </p>
                <a
                    href={`https://cardanoscan.io/transaction/${txId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00cdb8] hover:underline text-md"
                >
                    View your transaction details here
                </a>
                {!isLoading ?
                    <div className="flex items-center justify-center pt-3 w-[150px]">
                        <button
                            onClick={onClose}
                            className=" w-full px-4 py-2 bg-[#00cdb8] text-white font-semibold rounded-md hover:bg-[#00b2a1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00cdb8]"
                        >
                            Close
                        </button>
                    </div>
                    : <></>}
            </div>
        </div>
    );
};

export { SuccesModal };