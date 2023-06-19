/* eslint-disable react/prop-types */

import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import { useFetchNotesQuery, useDelatNoteMutation } from "../store/api/NoteSlice";

import { Link } from "react-router-dom";

function Notes() {

  const {data: notes = []} = useFetchNotesQuery() 
console.log('DATA', notes);

const [delatNote] = useDelatNoteMutation()

  const deleteNoteHandler = (id) => {
   delatNote(id)
  };
  

  return (
    <div className="flex flex-wrap justify-center mt-5">
      {/* {isLoading === "loading" && <div className="relative p-5 bg-yellow-400 w-64 h-64 m-5 shadow-2xl overflow-hidden">Loading...</div>}
      {error === "failed" && <div className="relative p-5 bg-yellow-400 w-64 h-64 m-5 shadow-2xl overflow-hidden">Sorry, {error}</div>} */}
      {notes.map((note) =>  (
        <div
          className="relative bg-yellow-400 w-64 h-64 m-5 shadow-2xl overflow-hidden"
          key={note.id}
        >
          <div className="p-5">
            <h3 className="font-bold text-2xl mb-4">{note.title}</h3>
            <p>{note.content}</p>
          </div>
          <div className="absolute bg-yellow-400 w-12 h-12 rotate-45 -top-6 -left-6" />
          <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4">
          <Link to={`/edit/${note.id}`}>
            <button className="mr-2">
              <FaEdit size={20} />
            </button>
            </Link>
            <button>
              <FaTrash size={20} onClick={() => deleteNoteHandler(note.id)} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notes;