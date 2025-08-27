import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { IconUpload } from "@tabler/icons-react";
import { useDropzone } from "react-dropzone";

export const CompactFileUpload = ({
  onChange,
}: {
  onChange?: (files: File[]) => void;
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (newFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    onChange && onChange(newFiles);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const { getRootProps, isDragActive } = useDropzone({
    multiple: false,
    noClick: true,
    onDrop: handleFileChange,
    onDropRejected: (error) => {
      console.log(error);
    },
  });

  return (
    <div className="w-full" {...getRootProps()}>
      <motion.div
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        className="p-4 group/file block rounded-lg cursor-pointer w-full relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20"
      >
        <input
          ref={fileInputRef}
          id="file-upload-handle"
          type="file"
          onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
          className="hidden"
        />
        
        <div className="flex flex-col items-center justify-center">
          <IconUpload className="h-6 w-6 text-white mb-2" />
          <p className="text-white text-sm font-medium text-center">
            {isDragActive ? "Drop file" : "Upload"}
          </p>
          
          {files.length > 0 && (
            <div className="mt-2 w-full">
              {files.map((file, idx) => (
                <motion.div
                  key={"file" + idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/20 rounded-md p-2 mt-2"
                >
                  <p className="text-white text-xs truncate">
                    {file.name}
                  </p>
                  <p className="text-white/70 text-xs">
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
