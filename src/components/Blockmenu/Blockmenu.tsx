import React from 'react'

interface BlockMenuProps {
  setBlocks: React.Dispatch<React.SetStateAction<string[]>>
}

const BlockMenu: React.FC<BlockMenuProps> = ({ setBlocks }) => {
  const addBlock = (blockType: string) => {
    setBlocks(prevBlocks => [...prevBlocks, blockType])
  }

  return (
    <aside className="w-48 bg-gray-100 p-4">
      <div className="text-gray-800 mb-4">Block Menu</div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-2" onClick={() => addBlock('text')}>
        Add Text Block
      </button>
      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded" onClick={() => addBlock('image')}>
        Add Image Block
      </button>
    </aside>
  )
}

export default BlockMenu
