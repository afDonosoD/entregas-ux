//
//  FontModifiers.swift
//  Mediminder
//
//  Created by Andres Donoso on 23/09/25.
//

import Foundation
import SwiftUI

struct Typography {
	struct Title: ViewModifier {
		func body(content: Content) -> some View {
			content
				.font(.system(size: 32, weight: .bold, design: .rounded))
				.fontWeight(.bold)
		}
	}
	
	struct Title2: ViewModifier {
		func body(content: Content) -> some View {
			content
				.font(.system(size: 18, design: .rounded))
		}
	}
	
	struct Body: ViewModifier {
		func body(content: Content) -> some View {
			content
				.font(.system(size: 16, design: .rounded))
		}
	}
}

extension View {
	func customTitle() -> some View {
		self.modifier(Typography.Title())
	}
	
	func customTitle2() -> some View {
		self.modifier(Typography.Title2())
	}
	
	func customBody() -> some View {
		self.modifier(Typography.Body())
	}
}
