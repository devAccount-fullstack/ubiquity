import { cva } from 'class-variance-authority';
import React, { useEffect, useRef, useState } from 'react';
import { twMerge } from "tailwind-merge";

interface ToggleProps {
  color_mode?: string;
  name?: string;
  title?: string;
  description?: string;
  isChecked?: boolean;
  setIsChecked: (e: boolean) => void;
}

const Toggle = ({
  name,
  title,
  description,
  isChecked = false,
  color_mode = 'light',
  setIsChecked = () => null,
}: ToggleProps) => {
  const [isActiveToggle, setIsActiveToggle] = useState(false);
  const toggleRef = useRef<HTMLLabelElement>(null);
  const toggleSwitch = () => {
    setIsChecked(!isChecked);
    setIsActiveToggle(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (toggleRef.current && !toggleRef.current.contains(event.target as Node)) {
      setIsActiveToggle(false);
    }
  };

  const labelStyles = cva(['cursor-pointer', 'rounded-full', 'border', 'transition'], {
    variants: {
      isActiveToggle: {
        true: ['border-blaze'],
        false: ['border-transparent'],
      },
    },
  });

  const toggleOutlineLightStyles = cva(['flex', 'h-6', 'w-12', 'items-center', 'rounded-full', 'p-1'], {
    variants: {
      isChecked: {
        true: ['bg-blaze'],
        false: ['bg-gray-100'],
      },
    },
  });

  const toggleOutlineDarkStyles = cva(['flex', 'h-6', 'w-12', 'items-center', 'rounded-full', 'p-1'], {
    variants: {
      isChecked: {
        true: ['bg-primary-600'],
        false: ['bg-gray-1200'],
      },
    },
  });

  const toggleBulletStyles = cva(['h-4', 'w-4', 'bg-white', 'rounded-full', 'shadow-md', 'duration-300'], {
    variants: {
      isChecked: {
        true: ['translate-x-6'],
        false: ['translate-x-0'],
      },
    },
  });

  const toggleOutlineStyles = () => {
    if (color_mode === 'light') {
      return toggleOutlineLightStyles({ isChecked });
    } else if (color_mode === 'dark') {
      return toggleOutlineDarkStyles({ isChecked });
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-start space-x-2">
      <label ref={toggleRef} className={twMerge(labelStyles({ isActiveToggle }))} htmlFor={name || title}>
        <input type="checkbox" className="hidden" checked={isChecked} onChange={toggleSwitch} id={name || title} />
        <div className={twMerge(toggleOutlineStyles())}>
          <div className={twMerge(toggleBulletStyles({ isChecked }))} />
        </div>
      </label>
      <div className="flex flex-col">
        {title && <p className="text-sm font-bold text-gray-1000">{title}</p>}
        {description && <p className="text-sm text-gray-1000">{description}</p>}
      </div>
    </div>
  );
};

export default Toggle;
