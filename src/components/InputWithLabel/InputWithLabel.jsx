export default function InputWithLabel({
    label = 'Label', 
    id = 'id', 
    name = 'name', 
    type = 'text', 
    required = false, 
    autoComplete = 'off',
}) {
    return (
        <div>
            <label className="block text-sm font-medium leading-6 text-gray-800">
              {label}
            </label>
            <div className="mt-2">
              <input 
              id={id}
              name={name}
              type={type}
              required={required}
              autoComplete={autoComplete}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2
               ring-inset ring-indigo-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
        </div>
    )
}