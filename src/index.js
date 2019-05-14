import Renderer from "./renderer";
import Text from "./text";
import Layout from "./layout";

Object.assign(PIXI.extras, {
  AwesomeText: Text
});

if (typeof PIXI !== 'undefined') {
  if (PIXI.extras) {
    PIXI.extras.AwesomeText = Text;
  } else {
    PIXI.extras = { AwesomeText: Text};
  }
}

export {
  Text,
  Renderer,
  Layout
}

/*

ix            = sdf_size / tex_width
iy            = sdf_size / tex_height
row_height    = (row_height + 2 * sdf_size) / tex_height;
aspect        = tex_width / tex_height;
ascent        = font->ascent * scaleY
descent       = fabsf(font->descent * scaleY)
line_gap      = font->line_gap * scale Y
cap_height    = gxcap.max.y * scaleY
x_height      = gx.max.y * scaleY
space_advance = gspace.advance_width * scaleX


scaley = row_height / tex_height / ( font->glyph_max.y - font->glyph_min.y );
scalex = row_height / tex_width / ( font->glyph_max.y - font->glyph_min.y );
gspace = font->glyphs[ font->glyph_idx( ' ' ) ];
gx     = font->glyphs[ font->glyph_idx( 'x' ) ]
gxcap  = font->glyphs[ font->glyph_idx( 'X' ) ]


sdf_size = 10

*/


