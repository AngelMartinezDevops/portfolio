# Portfolio - Ángel Ignacio Martínez

Portfolio personal de Platform Engineer.

## 🚀 Deploy en Cloudflare Pages

### Paso 1: Subir a GitHub

```bash
cd /path/to/portfolio

# Inicializar git
git init
git add .
git commit -m "Initial portfolio"

# Crear repo en GitHub (ve a github.com/new)
# Nombre: portfolio

# Conectar y subir (reemplaza TU-USUARIO)
git remote add origin https://github.com/AngelMartinezDevops/portfolio.git
git branch -M main
git push -u origin main
```

### Paso 2: Desplegar en Cloudflare Pages

1. Ve a: https://dash.cloudflare.com/
2. Click en **"Workers & Pages"**
3. Click en **"Create application"** → **"Pages"** → **"Connect to Git"**
4. Autoriza GitHub
5. Selecciona repo **portfolio**
6. **Build settings:**
   - Framework preset: **None**
   - Build command: (dejar vacío)
   - Build output directory: **/**
7. Click **"Save and Deploy"**

Tu sitio estará en: `tu-portfolio.pages.dev`

### Paso 3: Configurar dominio personalizado

1. En Cloudflare Pages, ve a tu proyecto
2. Click **"Custom domains"**
3. Click **"Set up a custom domain"**
4. Escribe: `angelignaciomartinez.com`
5. Cloudflare configurará DNS automáticamente

¡Listo! → https://angelignaciomartinez.com

## 📝 Personalizar

### Actualizar links
Edita `index.html` línea 95-97:
- LinkedIn: añade tu URL completa
- Email: actualiza tu email

### Añadir foto (opcional)
1. Añade tu foto: `foto.jpg`
2. En `index.html` después de la línea 12, añade:
```html
<img src="foto.jpg" alt="Ángel Ignacio" style="width: 150px; border-radius: 50%;">
```

### Desplegar cambios
```bash
git add .
git commit -m "Actualizar contenido"
git push
```

Cloudflare Pages desplegará automáticamente en 1 minuto.

## 🎨 Stack

- HTML5 + CSS3
- Cloudflare Pages (hosting)
- Git/GitHub (version control)

## 📊 Mejoras futuras

- [ ] Añadir foto profesional
- [ ] Crear sección /blog
- [ ] Añadir modo oscuro
- [ ] Integrar analytics (Cloudflare/Plausible)
- [ ] Añadir meta tags para SEO

