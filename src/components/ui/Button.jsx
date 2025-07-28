import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  loading = false,
  variant = "primary", // primary | secondary | danger
  size = "md", // sm | md | lg
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
}) => {
  // 🎨 Style based on variant
  const variantClass = {
    primary: "bg-natural-blue text-white hover:bg-blue-700",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-600 text-white hover:bg-red-700",
  }[variant];

  // 📏 Style based on size
  const sizeClass = {
    sm: "px-10 py-3 text-lg",
    md: "px-10 py-3 text-sm lg:px-10 lg:py-5 lg:text-base",
    lg: "lg:px-[60px] md:px-[30px] md:py-4 px-[24px] py-3 sm:py-[18px] text-sm sm:text-[24px]",
    xl:"py-[14px] px-[105px] sm:px-[110px] text-sm sm:text-[22px]",
    cutom1:" py-3 md:py-[20px] text-xs md:text-[20px]",
    custom2:"text-center py-[18px]"
  }[size];

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        flex items-center justify-center gap-2
        rounded-md transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantClass}
        ${sizeClass}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {/* 🔄 Loading Spinner */}
      {loading && (
        <svg
          className="animate-spin h-4 w-4 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
          />
        </svg>
      )}

      {/* ⬅️ Icon Left */}
      {!loading && iconLeft && <span className="mr-1">{iconLeft}</span>}

      {/* 🏷️ Button Text */}
      {!loading && children}

      {/* ➡️ Icon Right */}
      {!loading && iconRight && <span className="ml-1">{iconRight}</span>}
    </button>
  );
};

export default Button;
