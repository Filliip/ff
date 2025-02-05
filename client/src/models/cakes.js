export const getAllCakes = async () => {
  const req = await fetch("http://localhost:3000/cakes", {
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
export const getCakesById = async (id) => {
  const req = await fetch(`http://localhost:3000/cakes/${id}`, {
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
export const createCakes = async (formData) => {
  const req = await fetch(`http://localhost:3000/cakes/`, {
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
export const updateCakes = async (id, formData) => {
  const req = await fetch(`http://localhost:3000/cakes/${id}`, {
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
export const deleteCakes = async (id) => {
  const req = await fetch(`http://localhost:3000/cakes/${id}`, {
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
