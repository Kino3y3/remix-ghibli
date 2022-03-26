import { Form, useActionData, useTransition } from "remix";

export default function CommentsList({ filmId, comments }) {
  const transition = useTransition();
  const actionData = useActionData();
  const inputStyle = (fieldName) =>
    `inline-block w-full rounded border border-slate-400 py-2 px-3 ${
      actionData?.errors[fieldName] ? " border-red-500" : ""
    }`;
  return (
    <div>
      <h2 className="mb-2 text-3xl">Community Comments</h2>

      <div className="my-3 flex flex-col space-y-4">
        {comments.map((comment) => (
          <div className="rounded border border-slate-400 p-4">
            <div className="mb-2 text-xl font-bold text-gray-700">
              {comment.name}
            </div>
            <p className="text-gray-700">{comment.message}</p>
          </div>
        ))}

        <div className="rounded border border-slate-400 p-4">
          <Form method="post" action={`/films/${filmId}`}>
            <fieldset disabled={transition.state === "submitting"}>
              <label htmlFor="" className="my-2 inline-block">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id=""
                className={inputStyle("name")}
              />
              {actionData?.errors.name && (
                <p className="text-red-500">{actionData.errors.name}</p>
              )}
              <label htmlFor="" className="my-2 inline-block">
                Message:
              </label>
              <textarea
                type="text"
                name="message"
                id=""
                className={inputStyle("message")}
              />
              {actionData?.errors.message && (
                <p className="text-red-500">{actionData.errors.message}</p>
              )}

              <button
                type="submit"
                className="my-2 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
              >
                {/*Add comment*/}
                {transition.state === "submitting"
                  ? "Adding..."
                  : "Add comment"}
              </button>
            </fieldset>
          </Form>
        </div>
      </div>
    </div>
  );
}
