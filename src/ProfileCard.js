export function ProfileCard({ name, img, twitterHandle, text }) {
  return (
    <div className="border border-slate-500 w-48">
      <div className="w-48 h-48">
        <img src={img} className='border-b border-slate-500' alt="logo" />
      </div>
      <div className="p-4">
        <h3 className="text-2xl font-semibold">{name}</h3>

        <p className="italic text-slate-500 pb-4">@{twitterHandle}</p>
        <p className="text-ellipsis">{text}</p>
      </div>
    </div>
  );
}
