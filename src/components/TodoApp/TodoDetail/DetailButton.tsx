import React, { VFC } from 'react';

type Props = {
  children: string;
  clickAction?: () => void;
  isDelete?: boolean;
};

const DetailButton: VFC<Props> = (props) => {
  const { children, isDelete, clickAction } = props;
  const color = isDelete ? 'bg-red-400' : 'bg-green-400';

  return (
    <div className="mt-3  text-center">
      <button
        type="button"
        onClick={clickAction}
        className={`w-3/4 py-2 px-4 ${color} text-white font-semibold rounded-lg shadow-md"`}
      >
        {children}
      </button>
    </div>
  );
};

export default DetailButton;
