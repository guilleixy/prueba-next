interface InputProps {
    type: string;
    label: string;
}

export default function Input({type, label}: InputProps){
    return (
        <div className="relative flex justify-center flex-column">
            <input className="form-input text-sm z-10" type={type} placeholder=""/>
            <label className="form-label absolute text-sm">{label}</label>
            <div className="opacity-0 text-xs">error</div>
        </div>
    );
}