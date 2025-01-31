export const getAllCoffin = async () => {
  const req = await fetch("http://localhost:3000/coffin", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const data = await req.json();
  return {
    status: req.status,
    message: data.message,
    payload: data.payload,
  };
};
export const getCoffinById = async (id) => {
  const req = await fetch(`http://localhost:3000/coffin/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const data = await req.json();
  return {
    status: req.status,
    message: data.message,
    payload: data.payload,
  };
};
export const createCoffin = async (formData) => {
  const req = await fetch(`http://localhost:3000/coffin/`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(formData),
  });
  const data = await req.json();
  return {
    status: req.status,
    message: data.message,
    payload: data.payload,
  };
};
export const updateCoffin = async (id, formData) => {
  const req = await fetch(`http://localhost:3000/coffin/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(formData),
  });
  const data = await req.json();
  return {
    status: req.status,
    message: data.message,
    payload: data.payload,
  };
};
export const deleteCoffin = async (id) => {
  const req = await fetch(`http://localhost:3000/coffin/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "DELETE",
  });
  const data = await req.json();
  return {
    status: req.status,
    message: data.message,
    payload: data.payload,
  };
};
